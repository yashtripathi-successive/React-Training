

function Counter({count,setCount}) {
    function increment_value(){
        setCount((prev)=> prev+1);
    }
     function decrement_value(){
        setCount((prev)=> prev-1);
    }
    
    return (  
        <div>
        <p>count: {count}</p>
        <button style={{backgroundColor: 'lightgreen'}} onClick={increment_value}>Increment: </button>
        <button style={{backgroundColor: 'grey'}} onClick={decrement_value}>Decrement: </button>
        </div>
    );
}

export default Counter;