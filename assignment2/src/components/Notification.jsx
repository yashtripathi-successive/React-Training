import React from "react";
import { useState,useEffect } from "react";


function Notification() {


    const [message,setMessage] = useState("")
    
    
     
    useEffect(()=>{
        if(message){
            
            const timer = setTimeout(()=>setMessage(""),5000)
            return () => clearTimeout(timer);
        }
    },[message])
    function changemessage(){
       setMessage("this is text")
    }
    
    return ( 

    <div className="notification">

    <button onClick={changemessage}>Click to see Magic</button>
    {message && <p>Message is : {message}</p>}

    </div>

     );
}

export default Notification;