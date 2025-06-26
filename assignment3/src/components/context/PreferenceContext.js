

"use client"
import React, { createContext, useContext, useState } from 'react'



const preferenceContext = createContext()
const PreferenceContextProvider = ({children}) => {

    const [theme,setTheme] = useState('light')

    function toggleTheme(){
       setTheme((prev)=>prev==='light'?'dark':'light') 
    }

  return (
    <preferenceContext.Provider value={{theme,toggleTheme}}>
     {children}
    </preferenceContext.Provider>
  )
}

export function usePreferenceContext(){
    return useContext(preferenceContext)
}

export default PreferenceContextProvider
