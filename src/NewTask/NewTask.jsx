import React from 'react'

import NewTaskForm from './NewTaskForm'
import "./NewTask.css"


const NewTask = ({ tasks, setTasks }) => {
  const onSaveTask = (newTask) => {
    setTasks((prevState) => [newTask, ...prevState]);
  };
  return (
    <div className='newTaskWrapper'>
      <NewTaskForm onSaveTask = {onSaveTask} tasks = {tasks}/>
    </div>
  )
}

export default NewTask
