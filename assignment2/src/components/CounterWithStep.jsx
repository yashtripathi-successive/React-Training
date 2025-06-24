import { useState } from "react";

function CounterWithStep() {



    const[count,setCount] = useState(0)
    const [stepValue,setStepValue] = useState('')

    function incrementCount(){
        
           setCount(count+stepValue)
    }

    function decrementCount(){
            setCount(count-stepValue)
    }
    return (  

        <div className="counterwithsteps">

        <p>Count is : {count}</p>
        <input type = "value" placeholder = "Enter Steps" onChange={(e)=>setStepValue(Number(e.target.value))}></input>
        <button onClick = {incrementCount}> Increment </button>
        <button onClick = {decrementCount}> Decrement </button>

        </div>
    );
}

export default CounterWithStep;