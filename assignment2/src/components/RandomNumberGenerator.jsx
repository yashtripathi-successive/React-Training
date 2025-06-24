import { useState } from "react";


function RandomNumberGenerator() {

    const [randomNumber,setRandomNumber] = useState(1)


    function generateNewNumber(){
        setRandomNumber(Math.floor(Math.random() * 100) +1)
    }
    return ( 

      <div className="randomnumbergenerator"> 

      <p>Random Number is currently : {randomNumber}</p>

      <button onClick={generateNewNumber}> Click to Generate New Randonm Number</button>

      </div>

     );
}

export default RandomNumberGenerator;