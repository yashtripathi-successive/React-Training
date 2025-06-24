import { ThemeContext } from "@/app/page";
import { useState,useEffect,useContext } from "react";
import Clock from "./Clock";
import { useTheme } from "@/context/ThemeContext";
import { useLangContext } from "@/context/LanguageContext";

import { FormattedMessage } from 'react-intl';



function LanguageSwitcherApplication() {

     const {lang,toggleLang} =  useLangContext()
    
    return (  
        
        <div>

         {lang==="en" ?   <p>(hi i am yash)</p>  : <p>(hola, am yash)</p>}
            <button onClick={toggleLang}>toggle language</button>
        </div>
    );
}

export default LanguageSwitcherApplication;