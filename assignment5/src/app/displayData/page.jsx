"use client"
import React from "react"
import withDataFetching from "../question16/page";
const url = 'https://jsonplaceholder.typicode.com/posts'
function displayData({data}) {
    
    return ( 
    <div>
        <h2>Fetched Posts:</h2>
        <ul>
            {data && data.map((post) => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
     );
}

export default withDataFetching(displayData,url);