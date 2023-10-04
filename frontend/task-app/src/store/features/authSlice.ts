import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios



type LogIn = {
    token: string;
    message: string
}


// Action
export const loginAction = createAsyncThunk(
    "auth/login",
    async (data, thunkApi) => {
      try {
        const response = await axios.post<LogIn>(
          "http://127.0.0.1:8000/api/v1/auth/login",
          data=data
        );

        console.log("--***--",response.data)
        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  );

  interface LoginState {
    loading: boolean;
    error: string | null;
    data: LogIn | null
  }

  const initialState = {
    loading: false,
    error: null,
    data: null
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
        })
        .addCase(loginAction.fulfilled, (state, action: PayloadAction<LogIn>) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(loginAction.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          console.log("** failed")
          console.log(state.error)
        });
    },
  });

  export default loginSlice.reducer;
