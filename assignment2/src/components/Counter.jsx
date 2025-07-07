
import  {useState}  from "react";

function Counter() {
    const [count,setCount] = useState(0);



    function increment(){
        setCount(count+1)
    }
     function decrement(){
        setCount(count-1)
    }
    return (  
    <div className="counter">

    
    <p>Count : {count}</p>

    <button onClick={increment}>Hit to Increase value</button>
    <button onClick={decrement}>Hit to Decrease value</button>


    </div>



    );
}

export default Counter;