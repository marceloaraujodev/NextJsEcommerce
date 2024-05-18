import Product from '@/models/Product';
import { mongooseConnect } from '@/lib/mongoose';
import {isAdminRequest} from '@/pages/api/auth/[...nextauth]';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  // makes the admin panel secure
  await isAdminRequest(req, res);
  console.log('connected to DB');

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  // creates product
  if (method === 'POST') {
    const { title, description, price, images, category, productProperties } =
      req.body;

    const newProduct = await Product.create({
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    });
    console.log(newProduct);
    res.json(newProduct);
  }

  // updates product
  if (method === 'PUT') {
    const {
      title,
      description,
      price,
      _id,
      images,
      category,
      productProperties,
    } = req.body;
    console.log('this should be product Properties:', productProperties)
    const data = await Product.findOneAndUpdate(
      { _id },
      {
        title,
        description,
        price,
        _id,
        images,
        category,
        properties: productProperties,
      }
    );
    console.log('this is data from PUT', data);
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      console.log(req.query?.id);
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
