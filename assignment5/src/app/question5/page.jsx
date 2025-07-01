"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import '@/app/question1style.css'

function Page() {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    
    async function getPosts(){
        
        
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        setPosts(res.data)
              
        setLoading(false)
        
       
    }
    useEffect(()=>{
        

    getPosts()
    

    },[])
    return ( 
        <div className="container">

          {loading 
           ?
           (<div className="loader"></div>) 
           : 
           (
            <div>
            <h1 className="heading">Posts</h1>
            {posts.map((item,id)=>(
            <div className="postCard" key={id}>
            <p className="title"><span className="titlespan">Title : </span>{item.title}</p>
            
            <p className="description"><span className="descriptionspan">Description : </span> : {item.body}</p>
           
            </div>
          ))}
          </div>
          )}
        </div>
     );
}

export default Page;