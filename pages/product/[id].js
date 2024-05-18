import Center from '@/components/Center';
import Header from '@/components/Header';
import Title from '@/components/Title';
import WhiteBox from '@/components/WhiteBox';
import { mongooseConnect } from '@/lib/mongoose';
import Product from '@/models/Product';
import styled from 'styled-components';
import ProductImgGallery from '@/components/ProductImgGallery';
import Button from '@/components/Button';
import CartIcon from '@/components/icons/CartIcon';
import { useContext } from 'react';
import { CartContext } from '@/components/CartContext';
import Layout from '@/components/Layout';

const PageWrapper = styled.div`
  width: 100%;

`;

const ColWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 80px 0;


  @media screen and (min-width: 768px){
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;


export default function ProductPage({ product }) {
  const {addProduct} = useContext(CartContext);
  return (
    <>
      <Layout>
      <Center>
      <PageWrapper>
        <ColWrapper>
          <WhiteBox>
            <ProductImgGallery images={product.images} />
          </WhiteBox>
          <div>
            <Title title={product.title} />
            <p>
              {product.description}
            </p>

            <PriceRow>
              <Price>${product.price}</Price>
              <Button $black $outline onClick={() => addProduct(product._id)}>
                Add to cart
                <CartIcon />
              </Button>
            </PriceRow>
          </div>
        </ColWrapper>
        </PageWrapper>
      </Center>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const id = context.params.id;

  const product = await Product.findById({ _id: id });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
