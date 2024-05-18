"use client"
import styled, {keyframes} from 'styled-components';
import Center from './Center';
import Button from './Button';
import ButtonLink from './ButtonLink';
import CartIcon from './icons/CartIcon';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';



const Bg = styled.div`
  /* background-color: #222; */
  /* background-color: #eee; */
  background-color: #fff;
  color: white;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;
  @media screen and (min-width: 768px){
    font-size: 3rem;
  }
`;

const Descrip = styled.p`
  color: #aaa;
  font-size: 0.9rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1){
    order: 2;
  }
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    div:nth-child(1){
      order:0;
    }
    img {
      max-height: 300px;
      max-width: 100%;
  }
  }
  
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Banner = styled.div`
  max-width: 90%;
  /* height: 400px; */
  background-color: #eee;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px 50px;
  align-items: center;
  box-sizing: border-box;
  gap: 30px;
  margin: 0 auto;
  @media screen and (min-width: 768px){
    max-width: 100%;
  }
`;

const BoxLeft = styled.div`
  /* border: 1px solid white; */
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 300px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px){
    gap: 20px;
    padding: 20px 20px;
  }
`;

const DealText = styled.div`
  background-color: #a00;
  border: none;
  border-radius: 6px;
  padding: 3px 12px;
  line-height: 1.1;
  color: white;
  display: inline-block;
  text-align: center;
  font-size: 0.9rem;
`;

const BoxLeftTitle = styled.p`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 600;
  margin-bottom: 0;
  color: black;
`;

const BoxLeftP = styled.p`
  margin-bottom: 0;
  color: black;
`;

const BoxLeftDiv = styled.div`
  /* height: 100px; */
  display: flex;
  align-items: center;
  color: black;
`;

const rotateAnimation = keyframes`
0%, 100%{
  transform: rotate(-5deg);
}
50%{
  transform: rotate(5deg);
}
`;

const BoxLeftPrice = styled.span`
  margin-left: 5px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #a00;
  transform: rotate(-5deg);
  /* transition: 3s ease; */
  animation: ${rotateAnimation} 1s linear infinite;
`;

const BoxRight = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  width: 350px;
  img{
    /* padding: 30px 0; */
    max-height: 350px;
    width: 100%;
  }
`;

export default function Featured({product}) {


  const {addProduct} = useContext(CartContext);

  function addFeaturedProductToCart(){
    addProduct(product._id)
  }
  
  return (
    <Bg>
      <Center>
        <Banner>
          <BoxLeft>
            <DealText>WEEK DEAL</DealText> 
            <BoxLeftTitle>All New <br />
              For A Better You
            </BoxLeftTitle>
            <BoxLeftP>AMAZING DISCOUNTS AND DEALS</BoxLeftP>
            <BoxLeftDiv>From <BoxLeftPrice>$199.98</BoxLeftPrice></BoxLeftDiv>
            <ButtonLink $black href={'/products'}>SHOP NOW</ButtonLink>
          </BoxLeft>

          <BoxRight>
            <img src='/watches.png' alt='' />
          </BoxRight>
        </Banner>
        {/* <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Descrip>
              {product.description}
              </Descrip>
              <ButtonsWrapper>
                <ButtonLink href={'/product/' + product._id} $outline $white >
                  Read More
                </ButtonLink>
                <Button $white onClick={addFeaturedProductToCart}>
                  Add to Cart
                  <CartIcon />
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg"></img>
          </Column>
        </ColumnsWrapper> */}
      </Center>
    </Bg>
  );
}
