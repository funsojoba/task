import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./features/postSlice";
import loginSlice from "./features/auth/login"
import listTaskSlice from "./features/tasks/listTaskSlice";
import signupSlice from "./features/auth/signup"
import addTaskSlice from "./features/tasks/addTask"
import getTaskSlice from "./features/tasks/getTaskSlice"


const rootReducer = {
  post: postSlice,
  login: loginSlice,
  listTask: listTaskSlice,
  signup: signupSlice,
  addTask: addTaskSlice,
  getTask: getTaskSlice

};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
