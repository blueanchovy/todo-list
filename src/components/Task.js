import React from "react";
import { useDispatch } from "react-redux";
import { deleteTaskFromList, updateTaskStatus } from "../features/todoSlice";
import "./Task.css";

function Task({ id, name, status }) {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div className="task__data">
        <div className="task__name">Task Name: {name}</div>
        <div className="task__status">Status: {status}</div>
      </div>
      <div className="task__actions">
        <div className="task__button">
          <button onClick={() => dispatch(deleteTaskFromList(id))}>
            Delete Task
          </button>
        </div>
        <div className="task__button">
          {status !== "Done" ? (
            <button
              onClick={() => dispatch(updateTaskStatus({ id, status: "Done" }))}
            >
              Mark as Done
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
