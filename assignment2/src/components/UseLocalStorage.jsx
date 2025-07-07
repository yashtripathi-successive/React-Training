"use client"
import React, { useEffect, useState } from "react";

export function UseLocalStorage(key,initialvalue) {
      const[value,setValue] = useState(()=>{
     
    try {
      const stored = localStorage.getItem(key);

    
      if (stored === null || stored === "undefined") return initialvalue;

      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing localStorage value:", err);
     
    }
      })

      useEffect(()=>{
     
         localStorage.setItem(key,JSON.stringify(value))
      },[key,value])


      const remove = () =>{
      
        localStorage.removeItem(key)
        setValue(initialvalue)
      }

      return {value,setValue,remove}
}

