"use client"
import './styles.css'
import Counter from "@/components/Counter";
import Greeting from "@/components/Greeting";
import TaskList from "@/components/TaskList";
import UserCard from "@/components/UserCard";
import Weather from "@/components/Weather";
import Buttonfc from "@/components/Buttonfc"

import { useEffect,useState } from "react";
export default function Home() {
  

/*Q6 */
let text = 'hi i am yash'
let color = 'blue'


/*Q5 */
const task = [
  {
  id: 1,
  title: "assignment 1",
  description: "Finish the React assignment by tonight"
  
},
 {
  id: 2,
  title: "assignment 2",
  description: "Finish the React assignment by tonight"
  
  
},
 {
  id: 3,
  title: "assignment 3",
  description: "Finish the React assignment by tonight"
  
},

]



/*Q4 */
const [count,setCount] = useState(0);


/*Q3 */
const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    
    const input = prompt("Enter temperature");
    if (input === null || input.trim() === "") {
    alert("No temperature entered");
    return;
  }
  let temperature = Number(input)

    if (!isNaN(temperature)) {
      setTemperature(temperature);
    } else {
      alert("Please enter a valid number!");
    }
  }, []);



  /*Q2 */
  const user = [
  {
    name:'yash',
    email:'yash@gmail.com',
    avatarurl:"https://s.magecdn.com/social/24w/tc-linkedin.png"
  },
  {
    name:'arush',
    email:'arush@gmail.com',
    avatarurl:"https://s.magecdn.com/social/24w/tc-linkedin.png"},
  {
    name:'ram',
    email:'ram@gmail.com',
    avatarurl:"https://s.magecdn.com/social/24w/tc-linkedin.png"
  }
  ]

  return (
  <div className='container'>

      {/*Q1 */}
      <div className="greeting">
      <Greeting/>
      </div>
      <hr></hr>

      {/*Q2 */}
      <div className="usercard">
      {user.map((user,id)=>(
      <UserCard key={id}
      name={user.name}
      email={user.email}
      avatarurl={user.avatarurl}/>
      ))}
      </div>
      <hr></hr>

      {/*Q3 */}
      <div className="weather">  
      <Weather temperature={temperature} />      
      </div>
      <hr></hr>

      {/*Q4 */}
      <div className="counter">
      <Counter count={count} setCount={setCount}/>
      </div>
      <hr></hr>
    
      {/*Q5 */}
      <div className="tasklist">
      <TaskList task={task}/>
      </div>
      <hr></hr>

      {/*Q6 */}
      <div className="button">
      <Buttonfc text={text} color={color}/>
      </div>
     
     
      
    </div>
  );
}


