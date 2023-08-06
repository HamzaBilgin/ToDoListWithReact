import React from 'react'

import NewTaskForm from './NewTaskForm'
import "./NewTask.css"


const NewTask = ({ tasks, setTasks }) => {
  const onSaveProduct = (newTask) => {
    setTasks((prevState) => [newTask, ...prevState]);
  };
  return (
    <div className='newTaskWrapper'>
      <NewTaskForm onSaveProduct = {onSaveProduct} tasks = {tasks}/>
    </div>
  )
}

export default NewTask
