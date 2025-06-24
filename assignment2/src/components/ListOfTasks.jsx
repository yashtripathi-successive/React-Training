import React, { useCallback, useState } from "react";

function ListOfTasks() {


    const [tasks,setTasks] = useState([

        {
          name:"yash",
          status:false
        },
        {
          name:"aryan",
          status:false
        },
        {
          name:"anany",
          status:false
        }
    ])
   const changestatus = useCallback((id)=>{
            setTasks((prev)=>(
                prev.map((task,idx)=>(
                    id===idx?{...task,status:true}:task
   ))
              ))
   },[])
      
    
    return (
    <div>
       <ul>

        {tasks.map((task,id)=>(
        <li key={id}>{task.name}:{task.status.toString()}
        <button  onClick={()=>changestatus(id)}>{task.status?"done":"complete"}</button>
        </li>
       ))}
       </ul>


    </div>  
    );
}

export default ListOfTasks;