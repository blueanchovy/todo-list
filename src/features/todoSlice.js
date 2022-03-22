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
      state.value = state.value.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTaskToList, deleteTaskFromList } = todoSlice.actions;

export const selectTask = (state) => state.tasks.value;

export default todoSlice.reducer;
