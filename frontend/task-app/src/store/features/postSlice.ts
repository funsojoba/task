import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


type Post = {
    date: string;
    name: string;
}


// Action

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<Post[]>(
        "http://127.0.0.1:8000/"
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface PostState {
  loading: boolean;
  error: string | null;
  data: Post[] | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as PostState;


// SLice
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false
        console.log("** failed")
        console.log(state.error)
      });
  },
});

export default postSlice.reducer;
