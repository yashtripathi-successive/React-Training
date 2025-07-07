"use client"
import React, { useEffect } from "react"

export default function withLogger(Component) {

    return function logger(props){
        useEffect(()=>{

        console.log('component mounted')

        return ()=>console.log('component unmounted')

        },[])

        useEffect(()=>{

        console.log('component updated')

        },[props])
    
        return <Component {...props}/>

    }
    
}

