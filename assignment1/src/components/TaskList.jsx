function TaskList({task}) {
    return ( 

        <div>
            
          <ul>
          {task.map((t) => (
          <li key={t.id}>
           {t.title}
          </li>
          ))}
           </ul>
            
        </div>
     );
}

export default TaskList;