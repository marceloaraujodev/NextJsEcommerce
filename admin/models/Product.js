// Product.js

import categories from '@/pages/categories';
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  images: [
    {type: String}
  ],
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category'
  },
  properties: {type: Object}, 
},
{timestamps: true}
);

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;

// // imges was like this and working change to array of objs if breaks change it
// {
//   type: [String],
// }