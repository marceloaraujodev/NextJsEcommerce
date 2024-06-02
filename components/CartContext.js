import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext({});

export default function CartContextProvider({children}) {
  const ls = typeof window  !== "undefined" ? window.localStorage : null; 
  // array of ids
  const [cartProducts, setCartProducts] = useState([]);
  // array of the product objects
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

  // useEffect(() => {
  //     const preLoad = async () => {
  //       const res = await axios.post('/api/cart', { ids: cartProducts })
  //       setCartProducts(res.data)
  //       console.log(res.data)
  //     }
  //     // preLoad();
  // }, [products])

  async function addProduct(productId){
    setCartProducts(prev => [...prev, productId]);
    const res = await axios.post('/api/cart', { ids: productId })
    setProducts(res.data)
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
    })
  }

  function clearCart(){
    setCartProducts([])
  }

  return (
    <CartContext.Provider 
      value={{
        cartProducts, 
        clearCart, 
        addProduct, 
        removeProduct, 
        setCartProducts,
        products,
        setProducts
      }}
    >{children}</CartContext.Provider>
  )
}
