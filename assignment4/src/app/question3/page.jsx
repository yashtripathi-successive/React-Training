"use client"
import React, { useState } from "react";

function Message(){
    return (
        <div>
        <h1>hello boy</h1>
        </div>
        )
}

function Page() {

    const [input,setInput] = useState('')
    const [data,setData] = useState('')

    function handlesubmit(){
        setData(input)
        setInput('')
    }
    return ( 


      


         <div className="q3-main">


            <input type="text" value={input} placeholder="type 'show' to dispay message" onChange={((e)=>setInput(e.target.value))}/>
            <button onClick={handlesubmit}>submit</button>


            
            {data === "show" && <Message/>}
           
        </div>
     
     );
}

export default Page;