import Center from './Center';
import Title from './Title';
import ProductsGrid from './ProductsGrid';


export default function NewProducts({ products }) {
  // console.log('this is products in Product prop', products);
  return (
    <>
      <Center>
        <Title title='New Arrivals' />
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}
