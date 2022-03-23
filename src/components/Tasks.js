import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTask } from "../features/todoSlice";
import Task from "./Task";
import "./Tasks.css";

function Tasks() {
  const dispatch = useDispatch();
  const taskList = useSelector(selectTask);
  return (
    <div className="tasks">
      {taskList.map((task, key) => {
        return task.name ? (
          <Task id={task.id} name={task.name} status={task.status} key={key} />
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default Tasks;
