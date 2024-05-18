import CartContextProvider from '@/components/CartContext';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { createGlobalStyle } from 'styled-components';

//nextauth
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  body, html{
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-family: "Poppins" , sans-serif;
    background-color: #eee;
    height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;



export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
    <SessionProvider session={session}>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
      </HelmetProvider>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
      </SessionProvider>
    </>
  );
}
