"use client"
import { useRouter } from "next/navigation";
import React, { useEffect } from "react"

export default function withAuth(Component) {
    return function auth(props){
        const router = useRouter()


        useEffect(()=>{

          const isauthenticated = localStorage.getItem('name')
          if(!isauthenticated){
            router.push('/login')
          }
        },[])


        return <Component {...props}/>

    };
}

