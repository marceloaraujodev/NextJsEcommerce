import { mongooseConnect } from "@/lib/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STIPE_SECRET_KEY)

export default async function checkoutHandler(req, res) {
  if (req.method !== 'POST') {
    res.json('It should be a POST request');
    return;
  }
  const { name, email, city, zipcode, streetAddress, country, cartProducts } = req.body;

  await mongooseConnect();
 
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)]
  const productsInfo = await Product.find({_id: uniqueIds});

  // console.log(productsInfo);

  let line_items = [];

  // loops through each id of the uniqueIds array
  for (const productId of uniqueIds){
    const productInfo = productsInfo.find(p => p._id.toString() === productId);
    const quantity = productsIds.filter(id => id === productId)?.length || 0;
    // console.log(quantity, productId)

    if(quantity > 0 && productInfo){
        line_items.push({
          quantity,
          price_data: {
            currency: 'USD',
            product_data: {name: productInfo.title},
            unit_amount: quantity * productInfo.price * 100, // turns into cents
          }
        })
    }
  }

  // console.log(line_items)
  const orderDoc = await Order.create({
    line_items, name, email, city, zipcode, streetAddress, country, paid:false,
  })

  // console.log(orderDoc)
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.STRIPE_SUCCESS_URL + '/cart?success=1',
    cancel_url: process.env.STRIPE_SUCCESS_URL + '/cart?canceled=1',
    metadata: {orderId: orderDoc._id.toString(), test: 'ok'},
  });

  
  res.json({
    url: session.url
  })
}

