import Button from '@/components/Button';
import { CartContext } from '@/components/CartContext';
import Center from '@/components/Center';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Table from '@/components/Table';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 40px;
  @media screen and (min-width: 768px){
    gap: 40px;
    grid-template-columns: 0.8fr 1.2fr;
  }
`;
const ColumnsWrapperSuccess = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const SuccessTitle = styled.h1`
  font-size: 2.5;
`;

export default function cartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart} =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');


  const router = useRouter();
  // checks the url for success so it can clear cart
  const {success} = router.query;


  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      });
    } else {
      // clears cart after last item is deleted
      setProducts([]);
    }
  }, [cartProducts]);

  // Clears local storage cart after the purchase
  useEffect(() => {
    if(success){
      clearCart()
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', [])
      }
    }
  }, [success])

  function addOneMoreProduct(id) {
    addProduct(id);
  }

  function oneLessProduct(id) {
    removeProduct(id);
  }

  let total = 0;
  for (const productId of cartProducts) {
    //// if no price add 0 as default
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  async function goToCheckout(){
    const response = await axios.post('/api/checkout', {
      name, email, city, zipcode, streetAddress, country, cartProducts
    });
    // if sessions is created successfully it redirects user to stripe checkout
    if(response.data.url){
      window.location = response.data.url
    }

    // // this line below is for testing to skip the fill out form from stipe remove for production
    // router.push('http://localhost:3000/cart?success=1')
  }

  if(success){

    return (
      <>
        <Layout>
        <Center>
        <ColumnsWrapperSuccess>
          <Box>
            <SuccessTitle>Thanks for shopping with us.</SuccessTitle>
            <p>We will email you as soon as your order is shipped!</p>
          </Box>
          
        </ColumnsWrapperSuccess>
        </Center>
        </Layout>
      </>
    )
  }



  return (
    <>
    <Layout>
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>You cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => oneLessProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => addOneMoreProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>

                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="zip code"
                    value={zipcode}
                    name="zipcode"
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <Button $block $black onClick={goToCheckout}>
                  Checkout
                </Button>

            </Box>
          )}
        </ColumnsWrapper>
      </Center>
      </Layout>
    </>
  );
}
