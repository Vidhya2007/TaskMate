
export const AddTask = ({taskList, setTaskList,task,setTask}) => {

    const handleSubmit = (e) => {
          e.preventDefault();
          
          if(task.id){
            console.log("Enter into updating state")
            const date = new Date();
            const updatedTaskList = taskList.map((todo) => 
                (todo.id === task.id ? {id:task.id, name:  e.target.task.value , time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
        ));
            setTaskList(updatedTaskList);
            setTask({});
            

          } else {
            console.log("Enter into Add state")
            const date = new Date();
            const newTask = {
              id : date.getTime(),
              name : e.target.task.value,
              time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask]);
            setTask({});
          }
          
         
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name || ""}  autoComplete="off" placeholder="Add Task" maxLength='25' onChange = {e =>  setTask({...task, name: e.target.value})} />
            <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
