"use client"
import React, { useEffect, useState } from "react"
import '@/app/question1style.css'

function Page() {
    const [posts,setPosts] = useState([])
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)
    
    async function getPosts(){
        
        try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)
        }catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
       
    }
    useEffect(()=>{
        

    getPosts()
    

    },[])
    return ( 
        <div className="container">

          {loading ? (<div className="loader"></div>) : 
          (error ? (
            <div>
            <p>error found : {error}</p>
            <button onClick={getPosts}>retry</button>
            </div>
             ) : (
            <div>
            <h1 className="heading">Posts</h1>
            {posts.map((item,id)=>(
            <div className="postCard" key={id}>
            <p className="title"><span className="titlespan">Title : </span>{item.title}</p>
            
            <p className="description"><span className="descriptionspan">Description : </span> : {item.body}</p>
           
            </div>
          ))}
          </div>
          ))}
        </div>
     );
}

export default Page;