import { mongooseConnect } from "@/lib/mongoose";
import Order from "@/models/Order";


export default async function ordersHandler(req, res) {
  await mongooseConnect();
  const order = await Order.find().sort({createdAt:-1});
  res.json(order)
}
