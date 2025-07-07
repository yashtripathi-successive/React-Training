import { useShoppingContext } from "@/context/ShoppingCart";
import React from "react";
import "@/app/styles.css"


function Products() {

    const {cart,addToCart,deleteFromCart,getTotalPrice} = useShoppingContext()
    const products = [
        {id:1,name:"pant",price:2000},
        {id:2,name:"shirt",price:3000},
        {id:3,name:"trackpant",price:4000},
        {id:4,name:"jacket",price:8000}
    ]
    return ( 
        <div>
            <ul>
          {products.map((item,id)=>(
             <li key={id}>

             {item.name}:{item.price} 
             <button onClick={()=>addToCart(item)}>add to cart</button>

             </li>
          ))}
          </ul>

          <h1>total price is : ${getTotalPrice()}</h1>
        </div>
     );
}

export default Products;