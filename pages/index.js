import Featured from '@/components/Featured';
import Header from '@/components/Header';
// import Product from '@/models/Product';
import { mongooseConnectShared } from './../shared/mongooseShared';
import NewProducts from '@/components/NewProducts';
import Layout from '@/components/Layout';
import Promos from '@/components/Promos';
import Featured2 from '@/components/Featured2';
console.log('test')

export default function HomePage({ featuredProduct, newProducts }) {
  // console.log('this is new p', newProducts)
  return (
    <>
      <Layout>
        <Featured2 />
        <Featured product={featuredProduct} />
        <Promos />
        <NewProducts products={newProducts} />
      </Layout>
    </>
  );
}

// export async function getServerSideProps() {
//   const featuredProductId = '663bbdf58cf7d3a4cd34950a';
//   await mongooseConnectShared();
//   const featuredProduct = await Product.findById(featuredProductId);
//   const newProducts = await Product.find({}, null, {
//     sort: { _id: -1 },
//     limit: 10,
//   });
//   return {
//     // stringfy turns into string, then parse to convert into objct
//     props: {
//       featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       newProducts: JSON.parse(JSON.stringify(newProducts)),
//     },
//   };
// }
