import React from 'react'
import './Task.css'
const Task = ({task,tasks,setTasks}) => {
  const deleteTask = () => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };
  return (
    <li>
       <span
       style={{color:"red"}}>{task.taskName}</span>
       <div>
       <button>Güncelle</button>
       <button onClick={deleteTask}>Sil</button>
       </div>
       
    </li>
  )
}

export default Task
