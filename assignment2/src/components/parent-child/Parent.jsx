import React, { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

function Parent() {
    const[count,setCount]= useState(0)
    const increment = useCallback(()=>{
       
        setCount((p)=>p+1);
 
    },[count])


    function resetcount(){
        setCount(0);
    }
    return ( 


        <div>


         <Child count={count} increment={increment} resetcount={resetcount}/>
          
         

        </div>
     );
}

export default Parent;