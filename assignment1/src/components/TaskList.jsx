function TaskList({task}) {
    return ( 

        <div>
            
          <ul>
          {task.map((t) => (
          <li key={t.id}>
           {t.title}: {t.description}
          </li>
          ))}
           </ul>
            
        </div>
     );
}

export default TaskList;