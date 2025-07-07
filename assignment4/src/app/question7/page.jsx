"use client"
import { useState } from "react";
import React from "react";
import '@/app/globals.css'

function Page() {

    const clothes = ["pant","shirt","jeans","jacket"]
    const [value,setValue] = useState('')

    const filteredClothes = clothes.filter((item)=>item.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    return (
        <div className="search">

        <h1>Clothes Finder</h1>

        <input type="text" value={value} placeholder="search clothes for eg (jeans,jackets,pant,shirt)" onChange={((e)=>setValue(e.target.value))}/>
        { value && 
        (<ul>
        {filteredClothes.length > 0 
        ? 
        (filteredClothes.map((item,id)=>
        <li key={id}> {item} </li> )) 
        : 
        (<p>no item found</p>)}
        </ul>)}
        </div>
      );
}

export default Page;