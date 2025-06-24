import React from "react";

function Child({count,increment,resetcount}) {
   
    return (  
        <div>

            <p>count is : {count}</p>
            <button onClick={increment}>hit me to increase count</button>
            <button onClick={resetcount}>hit me to reset count to zero </button>
        </div>
    );
}

export default Child;