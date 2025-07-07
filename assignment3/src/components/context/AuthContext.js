"use client"


import React, { createContext, useContext, useState } from "react";



const authContext = createContext()
function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        username:"",
        isloggedin:false
    })

    function checkAuth(){
            setAuth({
                username:"yash",
                isloggedin:true
            })
    }

    function login(name,password){
        if(name==="yash" && password==="123"){
         setAuth({
            username:name,
            isloggedin:true
         })
         return true
    }
    return false
}

     function logout(){
        setAuth({
            username:'',
            isloggedin:false
        })
    }
    return (  
        <authContext.Provider value={{auth,checkAuth,login,logout}}>
            {children}
        </authContext.Provider>
    );
}

export function useAuthContext(){
    return useContext(authContext)
}


export default AuthContextProvider;