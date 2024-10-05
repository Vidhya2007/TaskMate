

export const ShowTask = ({taskList, setTaskList,task,setTask}) => {


    const handleEdit =(id) =>{
          const editedTask = taskList.find((todo) => todo.id === id);
          setTask(editedTask);
    }
    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter((todo) => todo.id !== id);
        setTaskList(updatedTaskList);
    }
    
  return (
   <section className="showTask">
    <div className="head">
        <div>
        <span className="title">Todo</span>
        <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => setTaskList([])} className="clearAll" >Clear All</button>
    </div>
    <ul>
        {taskList.map((eachTask) => (
            <li key={eachTask.id}>
            <p>
                <span className="name"> {eachTask.name} </span>
                <span className="time"> {eachTask.time} </span>
            </p>
            <i onClick={() => handleEdit(eachTask.id)} className="bi bi-pencil-square" ></i>
            <i onClick={() => handleDelete(eachTask.id)} className="bi bi-trash" ></i>
        </li>
        ))}
        
    </ul>
    
   
   </section>
  )
}
