'use client';

import { createContext, useState, useContext } from "react";

export const LangContext = createContext();


export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      
        {children}
     
    </LangContext.Provider>
  );
};

export const useLangContext = () => useContext(LangContext);
