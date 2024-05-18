import { mongooseConnect } from "@/lib/mongoose";
import Newsletter from "@/models/Newsletter";


export default async function subscriptionHandler(req, res) {
  try {
    await mongooseConnect();
    console.log('connected to db')
    const {email} = req.body;
    console.log(email)

      // add new subscription
      const doc = Newsletter.create({email})
    // console.log('create success')
    res.json('ok', {doc})
    
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


// // deactivate subscription
// await Newsletter.findOneAndUpdate(
//   {},
//   {$set: {[`subscriptions.${email}`]: false}},
//   {new: true}
// );

// // get all active subscriptions
// await Newsletter.find({'subscriptions.email': true})

// // get all email addresses subscribed or not
// Object.keys(Newsletter.subscriptions)