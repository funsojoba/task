import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./features/postSlice";
import loginSlice from "./features/auth/login"
import listTaskSlice from "./features/tasks/listTaskSlice";
import signupSlice from "./features/auth/signup"
import addTaskSlice from "./features/tasks/addTask"
import getTaskSlice from "./features/tasks/getTaskSlice"
import editTaskSlice from "./features/tasks/editTaskSlice"
import deleteTaskSlice from "./features/tasks/deleteTaskSlice";


const rootReducer = {
  post: postSlice,
  login: loginSlice,
  listTask: listTaskSlice,
  signup: signupSlice,
  addTask: addTaskSlice,
  getTask: getTaskSlice,
  editTask: editTaskSlice,
  deleteTask: deleteTaskSlice,

};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
