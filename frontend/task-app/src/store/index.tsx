import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./features/postSlice";
import loginSlice from "./features/authSlice"
import listTaskSlice from "./features/tasks/listTaskSlice";

const rootReducer = {
  post: postSlice,
  auth: loginSlice,
  listTask: listTaskSlice,

};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
