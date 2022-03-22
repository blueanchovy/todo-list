import React from "react";
import { useSelector } from "react-redux";
import { selectTask } from "../features/todoSlice";
import "./Tasks.css";

function Tasks() {
  const taskList = useSelector(selectTask);
  return (
    <div className="tasks">
      {taskList.map((task) => {
        return <>{task.name}</>;
      })}
    </div>
  );
}

export default Tasks;
