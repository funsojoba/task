import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import BASEURL from '../../baseURL';



type SignUp = {
    token: string;
    message: string
}


// Action
export const signupAction = createAsyncThunk(
    "auth/login",
    async (data:{username: string, password: string}, thunkApi) => {
      try {
        const response = await axios.post<SignUp>(
          BASEURL + "/api/auth/register",
          data=data
        );
        console.log("DATA: -->",response.data)
          setInterval(function () {
            window.location.href = "/login";
        }, 1500);

        return response.data;
      } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  );

  interface SignUpState {
    loading: boolean;
    error: string | null;
    data: SignUp | null
  }

  const initialState = {
    loading: false,
    error: null,
    data: null
  } as SignUpState

//   Slice

const signupSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(signupAction.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(signupAction.fulfilled, (state, action: PayloadAction<SignUp>) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(signupAction.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          console.log(action)
        });
    },
  });

  export default signupSlice.reducer;
