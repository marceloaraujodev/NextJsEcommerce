import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext({});

export default function CartContextProvider({children}) {
  const ls = typeof window  !== "undefined" ? window.localStorage : null; 
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(cartProducts?.length > 0){
      ls?.setItem('cart', JSON.stringify(cartProducts))
    }
  }, [cartProducts, ls])


  useEffect(() => {
    if(ls && ls.getItem('cart')){
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, [ls]);

  // gets items right as they are added instead of only geting when you are on cartpage
  useEffect(() => {
    if (cartProducts.length > 0) {
      // sends ids to server to get the info
      axios.post('/api/cart', { ids: cartProducts }).then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      });
    } else {
      // clears cart after last item is deleted
      setProducts([]);
    }
  }, [cartProducts]);

  async function addProduct(productId){
    setCartProducts(prev => [...prev, productId]);

    // const res = await axios.post('/api/cart', {ids: productId})
    // setProducts(prev => [...prev, ...res.data])
  }

  function removeProduct (productId){
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if(pos !== -1){
        const updatedCart = prev.filter((value, index) => index !== pos);
        /* sets the local storage cart to reflect the last modification of the cart 
          removing the last item from the cart */
        ls.setItem('cart', JSON.stringify(updatedCart))
        return updatedCart;
      }
      return prev;
    });
    // console.log(productId)
    // setProducts(prev => {
    //  return prev.filter(p => p._id !== productId)
    // })
    // console.log(products.filter(p => p._id == productId))
  }

  function clearCart(){
    setCartProducts([])
  }

  return (
    <CartContext.Provider 
      value={{cartProducts, clearCart, addProduct, removeProduct, setCartProducts, products, setProducts}}
    >{children}</CartContext.Provider>
  )
}
