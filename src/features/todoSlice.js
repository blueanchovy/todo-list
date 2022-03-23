import { createSlice } from "@reduxjs/toolkit";
import { TaskList } from "../TaskList";

const initialState = {
  value: TaskList,
};

export const todoSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTaskToList: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    deleteTaskFromList: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      state.value.map((task) => {
        if (
          task.id === action.payload.id &&
          task.status !== action.payload.status
        ) {
          task.status = action.payload.status;
        }
      });
    },
  },
});

export const { addTaskToList, deleteTaskFromList, updateTaskStatus } =
  todoSlice.actions;

export const selectTask = (state) => state.tasks.value;

export default todoSlice.reducer;
