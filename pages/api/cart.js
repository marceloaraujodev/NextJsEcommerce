// import { mongooseConnect } from "@/lib/mongoose";
import { mongooseConnectShared } from './../../shared/mongooseShared'
import Product from "@/models/Product";

export default async function cartHandler(req, res) {
  await mongooseConnectShared();
  const ids = req.body.ids
  res.json(await Product.find({_id: ids}));
}
