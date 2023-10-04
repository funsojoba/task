import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./features/postSlice";
import loginSlice from "./features/authSlice"

const rootReducer = {
  post: postSlice,
  auth: loginSlice,

};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
