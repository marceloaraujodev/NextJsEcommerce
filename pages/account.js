import React from 'react';
import Center from '@/components/Center';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import Button from '@/components/Button';
import CenterVertically from '@/components/CenterVertically';

import { useSession, signIn, signOut } from 'next-auth/react';

const Container = styled.div`
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 70vh; */
  /* border: 10px solid black; */
`;

const LeftCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  span{
    font-weight: 500;
  }
  ul {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 10px 0;
    display: flex;
  }
  li {
    line-height: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

const OrderDetails = styled.div`
  border: 1px solid #ccc;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  border-radius: 10px;
  margin-top: 80px;
  margin-bottom: 40px;
  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  img {
    width: 100%;
  }
`;

const ProductInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  gap: 10px;

  button {
    font: 0.9rem;
    font-weight: 400;
  }
`;

// pull actuall data from orders! data is not synced yet

export default function Account() {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <Layout>
        <CenterVertically>
          <Button $black $outline onClick={() => signIn('google')}>
            Login with Google
          </Button>
        </CenterVertically>
        </Layout>
      )}

      {session && (
        <>
          <Layout>
            <Container>
              <Center>
                
                <LeftCol>
                <div>
                Signed in as: 
                <span> {session.user.email}</span>
                </div>
                <Button $black size='s' onClick={() => signOut()}>Sign out</Button>
                  {/* <ul>
                    <li>Your Orders</li>
                  </ul> */}
                </LeftCol>
              </Center>
            </Container>

            <Center>
              <OrderDetails>
                <ImgBox>
                  <img src="/w.png" alt="" />
                </ImgBox>

                <span>Apple watch</span>
                {/* <span>{product.title}</span> */}
                <ProductInfoBox>
                  <Button $black size="s">
                    Buy again
                  </Button>
                  <Button $black size="s">
                    View your item
                  </Button>
                </ProductInfoBox>
              </OrderDetails>
            </Center>
          </Layout>
        </>
      )}
    </>
  );
}

