import { DeleteObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { mongooseConnect } from '@/lib/mongoose';
import {isAdminRequest} from '@/pages/api/auth/[...nextauth]';
import Product from '@/models/Product';
import awsClient from '../../lib/awsClient';

const bucketName = 'myecommercebucket-555'

export default async function handleDeleteImages(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);

  // gets keys and sets to an array
  const {urls, productId} = req.body;
  const keys = urls.map(url => {
    const split = url.split('/')
    const obj = {Key: split[split.length - 1]}
    return obj;
  })
  console.log(keys)
  try {

  const product = await Product.findById(productId);

 // this is for db array or urls
  const updatedImages = product.images.filter(link => !urls.includes(link))

  product.images = updatedImages
  await product.save()


    const deleted = await awsClient.send(new DeleteObjectsCommand({
      Bucket: bucketName,
      Delete: {
        Objects: keys
      }
    }));

    res.status(200).json({
      message: 'Images deleted successfully',
      info: deleted
    })
  } catch (error) {
    console.error('Error occurred during S3 object deletion:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

}
