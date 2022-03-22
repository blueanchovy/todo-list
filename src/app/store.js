import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: todoReducer,
  },
});
