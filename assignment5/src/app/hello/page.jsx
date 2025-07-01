"use client"
import React, { useState } from "react"
import withLogger from "../question15/page"
import { useRouter } from "next/navigation"

function Page() {
    const router=useRouter();
    const [name,setName] = useState('')
    const [submit,setSubmit] = useState('')

    function handleSubmit(){
        router.push("/")
        setSubmit(name)
       
    }

    return (  
        <div>
            {submit && (<h1>Hello : {name}</h1>)}
           { !submit && (<div>
            <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleSubmit}>submit name</button>
            </div>)}
        </div>
    );
}

export default withLogger(Page);
