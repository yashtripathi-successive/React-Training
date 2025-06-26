"use client"
import Counter from "@/components/Counter";
import PersonForm from "@/components/PersonForm";
import ToDoList from "@/components/ToDoList";
import RandomNumberGenerator from "@/components/RandomNumberGenerator";
import CounterWithStep from "@/components/CounterWithStep";
import Clock from "@/components/Clock";
import Notification from "@/components/Notification";
import ThemeSwitcherApplication from "@/components/ThemeSwitcherApplication";
import SlideShow from "@/components/SlideShow";
import { useState, createContext } from "react";
import LanguageSwitcherApplication from "@/components/LanguageSwitcherApplication";
import { ThemeProvider } from "@/context/ThemeContext";
import { LangProvider } from "@/context/LanguageContext";
import StudentList from "@/components/StudentList";
import EmployeeSalary from "@/components/EmployeeSalary";
import ListOfTasks from "@/components/ListOfTasks";
import Parent from "@/components/parent-child/Parent";
import UseClipboardChecking from "@/components/UseClipboardChecking";
import UseLocalStorage from "@/components/UseLocalStorage";
import UseLocalStorageChecking from "@/components/UseLocalStorageChecking";
import ShoppingCartProvider from "@/context/ShoppingCart";
import Products from "@/components/shoppingart/Products";
import Shopping from "@/components/shoppingart/Shopping";
import VotingApp from "@/components/VotingApp";
import UseTimerChecking from "@/components/UseTimerChecking";




export const ThemeContext = createContext();



export default function Home() {





  // const [theme,setTheme] = useState("light")
  // const toggleTheme=()=>{
  //   setTheme((prev)=>prev==="light"?"red":"light")
  // }

  return (
    <div>
      {/* <UseClipboardChecking/> */}
     
      
      {/* <ThemeProvider>
      <ThemeSwitcherApplication />
      </ThemeProvider> */}

  {/* <LangProvider>
      <LanguageSwitcherApplication/>
      </LangProvider>     */}
  
    {/* <StudentList/> */}


    {/* <EmployeeSalary/> */}
    {/* <ListOfTasks/> */}
{/* <Parent/> */}
{/* <Counter/> */}
{/* <SlideShow/> */}

{/* <UseLocalStorageChecking/>  */}
{/* <UseClipboardChecking/> */}

{/* 
    <ShoppingCartProvider>
    <Products/>

    <Shopping/>
    </ShoppingCartProvider> */}


    {/* <VotingApp/> */}


<UseTimerChecking/>


    </div>
  );
}
