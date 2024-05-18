import styled from 'styled-components';
import Button from './Button';
import CartIcon from './icons/CartIcon';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductWrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const WhiteBox = styled(Link)`
  
  background-color: white;
  padding: 20px;
  height: 140px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  img {
    max-width: 100%;
    max-height: 120px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 2px;
  @media screen and (min-width: 768){
    display: flex;
    gap: 5px;
  }
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0;
  @media screen and (min-width: 768){
    font-size: 1.5rem;
  }
`;

const ButtonText = styled.span`
  /* margin-right: 5px; */

`;

export default function ProductBox({ _id, price, title, description, images }) {

  const {addProduct} = useContext(CartContext);

  const url = '/product/' + _id
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
          <img src={images?.[0]} alt="" />
      </WhiteBox>
      <Title href={url}>{title}</Title>

      <ProductInfoBox>
      <PriceRow>
        <Price>${price}</Price>
        <div>
          <Button $block $black $outline size='s' onClick={() => addProduct(_id)}>
            <ButtonText>Add to</ButtonText>
            <CartIcon />
          </Button>
        </div>
      </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
