import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskToList, selectTask } from "../features/todoSlice";
import "./AddTask.css";

function AddTask() {
  const dispatch = useDispatch();
  const taskList = useSelector(selectTask);

  const [newTask, setNewTask] = useState("");
  const TaskStatus = "Pending";
  return (
    <div className="addTask">
      <div className="addTask__form">
        <form action="">
          <input
            value={newTask}
            placeholder="Enter To Do Item"
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();

              dispatch(
                addTaskToList({
                  id: taskList[taskList.length - 1].id + 1,
                  key: taskList[taskList.length - 1].key + 1,
                  name: newTask,
                  status: TaskStatus,
                })
              );
              setNewTask("");
            }}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
