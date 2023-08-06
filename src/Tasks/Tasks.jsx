import Task from "./Task";
import "./Tasks.css";
import NewTask from "../NewTask/NewTask";
import { useState } from "react";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="tasks">
      <NewTask tasks={tasks} setTasks={setTasks}/>
      <div className="tasks--list">
        <ul>
          {tasks.length === 0 ? (
            <p>Hiç Görev Yok</p>
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
