"use client"
import React, { useEffect, useState } from "react"


export default function withDataFetching(Component,url){
    return function dataFetchingFunction(props){
        const [data,setData] = useState([])
        
         async function fetchData(url){
         const response = await fetch(url)
         const result = await response.json()
         setData(result)
        }


        useEffect(()=>{
        fetchData(url)
        },[url])


        return <Component {...props} data={data}/>
    }
}