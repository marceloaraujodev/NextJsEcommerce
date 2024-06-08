import { mongooseConnectShared } from './../../shared/mongooseShared';
import Stripe from "stripe";
import {buffer} from 'micro';
import Order from "@/models/Order";
// import {headers } from 'next/headers';
// import { buffer } from 'node:stream/consumers';

/* 
  instructions:
  download stripe cli
  cd to cli stripe folder
  open cmd prompt type stripe login
  confirm on the page by clicking on link in the cli window
  run this command on the stripe cli stripe listen --forward-to localhost:4242/stripe_webhooks
  change localhost if need it, the frontend is: stripe listen --forward-to localhost:4000/api/webhook
  ⚠️ if route is wrong it wont set it to paid in db! has to be this for test localhost:4000/api/webhook
*/

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET

export default async function webhookHandler(req, res) {
  await mongooseConnectShared();
  const sig = req.headers['stripe-signature'];
  
  let event;
  
  try { 
    // const rawBody = await buffer(req);
    const rawBody = (await buffer(req)).toString('utf8');
    console.log('try block')
    console.log('this is signature', sig)
    console.log('this is rawbody', rawBody)
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    console.log('event', event)
  } catch (err) {
    console.log('there was an error', err.message)
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      console.log('this should be Data and orderId', data)
      if(orderId && paid){
        await Order.findByIdAndUpdate(orderId, {paid: true})
      }
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).send('ok');
}

export const config = {
  api: {bodyParser: false}
}