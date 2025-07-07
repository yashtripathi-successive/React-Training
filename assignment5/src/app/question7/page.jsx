"use client"
import { blue, green, red } from "@mui/material/colors"
import axios from "axios"
import React, { useState } from "react"

function Page() {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [error,setError] = useState('')
    const [submit,setSubmit] = useState(false)
    const [status,setStatus] = useState(false)
    


    async function handleSubmit(e){
        
        e.preventDefault()
        setSubmit(true)
        setError('')
        try{
          const res = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,content
          })
          console.log(res.data)
          setStatus(true)
          setTitle('')
          setContent('')
        }catch(error){
            console.log(error)

            setError(error)
            
            setStatus(false)
        }
        

    }
    return (

        <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" name="content" placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)}/>
                <button type="submit">submit</button>
            </form>

        {submit && (
        <p style={{ color: status ? 'green' : 'red' }}>
          {status ? 'Post submitted successfully' : 'Post not submitted'}
        </p>
        )}

        {error && (
        <p style={{ color: 'red' }}>{error.message}</p>
        )}
        </div>
      );
}

export default Page;