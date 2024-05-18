import Center from '@/components/Center';
import Layout from '@/components/Layout';
import ProductsGrid from '@/components/ProductsGrid';
import Title from '@/components/Title';
import { mongooseConnectShared } from './../shared/mongooseShared';
import Product from '@/models/Product';

export default function products({ products }) {
  return (
    <>
      <Layout>
        <Center>
          <Title title="All Products" />
          <ProductsGrid products={products} />
        </Center>
      </Layout>
    </>
  );
}

// gets products from admin db
export async function getServerSideProps() {
  await mongooseConnectShared();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  // console.log(products)

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
