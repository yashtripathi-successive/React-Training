"use client"

import React, { useState } from 'react'
import '@/app/globals.css'

function page (){
    const [tempInCelcius,setTempInCelcius] = useState('')
    const [tempInFahrenite,setTempInFahrenite] = useState('')


    function manageTempInCelcius(e){
       
        const value = e.target.value
        setTempInCelcius(value)
        if(value===''){
            setTempInFahrenite('')
        }else{
            const fahrenite = (value*9/5 ) + 32
            setTempInFahrenite(fahrenite)
        }

    }


    function manageTempInFahrenite(e){
         const value = e.target.value
         setTempInFahrenite(value)
        if(value===''){
            setTempInCelcius('')
        }else{
            const celcius = (value-32)*5/9
            setTempInCelcius(celcius)
        }
    }
  return (
    <div className='main'>
      <h1>Temperature Converter</h1>
      <div className='temperature-section'>
      <input type="number" placeholder='enter temperature in celcius' value={tempInCelcius}  onChange={manageTempInCelcius}/>
      <input type="number" placeholder='enter temperature in fahrenite' value={tempInFahrenite} onChange={manageTempInFahrenite}/>
      </div>
    </div>
  )
}

export default page
