import React, { createContext, useContext, useState } from "react";


const shoppingContext = createContext()
function ShoppingCartProvider({children}) {
    
    const [cart,setCart] = useState([])

    function addToCart(item) {
     setCart((prev) => {
     const exists = prev.some((cartItem) => cartItem.id === item.id);

      if (exists) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

    function deleteFromCart(idx_to_delete){
        setCart((prev)=>{
            return prev.map((item,id)=>{
                if(id===idx_to_delete){
                    if(item.quantity>1){
                        return{...item,quantity:item.quantity-1}
                    }
                    else{
                        return null
                    }
                }
                return item
            }).filter((item)=>item!==null)
        })
    }
    function getTotalPrice(){
        const res = cart.reduce((sum,items)=>sum+Number(items.price*items.quantity),0)
        return res
    }

    return (


    <shoppingContext.Provider value={{cart,addToCart,deleteFromCart,getTotalPrice}}>
        {children}
    </shoppingContext.Provider>

    )
}
export function useShoppingContext(){
    return useContext(shoppingContext)
}

export default ShoppingCartProvider;



