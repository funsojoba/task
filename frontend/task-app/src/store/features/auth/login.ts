import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import BASEURL from '../../baseURL';



type LogIn = {
    token: string;
    message: string
}


// Action
export const loginAction = createAsyncThunk(
    "auth/login",
    async (data:{username: string, password: string}, thunkApi) => {
      try {
        const response = await axios.post<LogIn>(
          BASEURL + "/api/auth/login",
          data=data
        );

        // store token in localStorage
        const token = response.data?.data.token
        localStorage.setItem('token', token)

          setInterval(function () {
            window.location.href = "/dashboard";
        }, 1500);

        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );

  interface LoginState {
    loading: boolean;
    error: string | null;
    data: LogIn | null,
    isLoggedIn: boolean
  }

  const initialState = {
    loading: false,
    error: null,
    data: null,
    isLoggedIn: false
  } as LoginState

//   Slice

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(loginAction.pending, (state, action) => {
          state.loading = true;
          state.isLoggedIn = false
        })
        .addCase(loginAction.fulfilled, (state, action: PayloadAction<LogIn>) => {
          state.loading = false;
          state.data = action.payload;
          state.isLoggedIn = true
        })
        .addCase(loginAction.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          state.isLoggedIn =  false
          state.loading = false
        });
    },
  });

  export default loginSlice.reducer;
