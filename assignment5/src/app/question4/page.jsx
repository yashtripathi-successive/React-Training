"use client"
import { Container, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import React, {  useEffect, useState } from "react"
import axios from "axios";

function Page() {
    const [page,setPage] = useState(0)
    const [rowsPerPage,setRowsPerPage] = useState(5)
    const [posts,setPosts] = useState([])
    const [error,setError] = useState('')
    

    async function getPosts(){
        try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)

        }catch(error){
             setError(error.message)
        }
    }


    useEffect(()=>{
        getPosts()
    },[])

    function handleRowsPerPage(e){
        setRowsPerPage(parseInt(e.target.value,10))
        setPage(0)
    }

    const paginatedPosts = posts.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
    return ( 
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {paginatedPosts.map((post)=>(
                     <TableRow key={post.id}>
                        <TableCell>{post.id}</TableCell>
                        <TableCell>{post.title}</TableCell>
                    </TableRow>
                   ))}
                </TableBody>


                <TablePagination
                count={posts.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={(_,value)=>setPage(value)}
                onRowsPerPageChange={handleRowsPerPage}/>
            </Table>
        </Container>
     );
}

export default Page;