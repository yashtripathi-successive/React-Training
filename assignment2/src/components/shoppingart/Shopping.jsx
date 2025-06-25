import { useShoppingContext } from "@/context/ShoppingCart";
import React from "react";

function Shopping() {
    const {cart,addToCart,deleteFromCart,getTotalPrice} = useShoppingContext()
    return (
        <div>
        <h1>shopping cart </h1>

     {cart.length===0?(<p>cart is empty</p>):
     (  
        cart.map((item,id)=>(
          <div key={id}>

           <span>{item.name} : {item.price} x {item.quantity}</span>
           <button onClick={()=>deleteFromCart(id)}>clear item</button>
          </div>
        ))
    
     )}


        </div>
      );
}

export default Shopping;