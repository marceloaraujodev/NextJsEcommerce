import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({});

export default function CartContextProvider({children}) {
  const ls = typeof window  !== "undefined" ? window.localStorage : null; 
  const [cartProducts, setCartProducts] = useState([]) 

  useEffect(() => {
    if(cartProducts?.length > 0){
      ls?.setItem('cart', JSON.stringify(cartProducts))
    }
  }, [cartProducts])


  useEffect(() => {
    if(ls && ls.getItem('cart')){
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);

  function addProduct(productId){
    setCartProducts(prev => [...prev, productId])
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
      value={{cartProducts, clearCart, addProduct, removeProduct, setCartProducts}}
    >{children}</CartContext.Provider>
  )
}
