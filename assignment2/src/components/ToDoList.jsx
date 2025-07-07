import {useState} from "react";

function ToDoList() {

    
    const [todos,setTodos] = useState([]);
    
    const [input,setInput] = useState("")


    
    function addTodo(){
         
        if(input.trim()!==''){
            setTodos([...todos,{ text: input.trim(), complete: false }])
            setInput("")
        }
    }

     function deleteTodo(index_to_delete){
        setTodos(todos.filter((_,idx)=> idx!==index_to_delete))
    }

    function toggleComplete(index) {
    setTodos(
    todos.map((todo, idx) =>
      idx === index ? { ...todo, complete: !todo.complete } : todo
      )
     );
    }


    return ( 

    <div classname = "todolist">

     <input type = "text" 
      placeholder = "Enter Task that needs to be added"
      value={input}
      onChange={(e) => setInput(e.target.value)}></input>
     <button onClick={addTodo}> Add Todo </button>
     
     
     <ul>
     {todos.map((todos,idx)=>(
     <li key ={idx}> {todos.text} 
     <input
     type="checkbox"
     checked={todos.complete}
     onChange={() => toggleComplete(idx)}/>
     <p>Current State is : {todos.complete.toString()}</p>

     <button onClick={()=>deleteTodo(idx)}> Delete Todo </button>
     </li>

     ))}
     </ul>
    </div>

     );
}

export default ToDoList;