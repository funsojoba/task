// authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios

// Define your initial state
const initialState = {
  user: null, // or any other initial state
  loading: false,
  error: null,
};

// Create an Async Thunk action for the login functionality
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
      // Make your API request using Axios
      const response = await axios.post('http://127.0.0.1:8000/auth/login', credentials);

      // Parse the response and return the user data
      const userData = response.data;
      return userData;
    } catch (error:any) {
      // Handle any network or other errors
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

// Create a Redux slice
const authSlice:any = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
