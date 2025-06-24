import { ThemeContext } from "@/app/page";
import { useState,useEffect,useContext } from "react";
import Clock from "./Clock";
import { useTheme } from "@/context/ThemeContext";



function ThemeSwitcherApplication() {

     const {theme,toggleTheme} =  useTheme();
    
    return (  
        
        <div  style={{
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:theme=="light"?"white":"red",
        height:"100vh",
         flexDirection: "column", 
         
      }} >
        

        
        <button  style={{
          backgroundColor: "grey",
          color: "smokewhite",
          border: "none",
          borderRadius: "8px",
          padding: "1rem",
          margin:"1rem"
        }} onClick = {toggleTheme}>hit me to change theme</button>

         <Clock/>
        </div>
        


    );
}

export default ThemeSwitcherApplication;