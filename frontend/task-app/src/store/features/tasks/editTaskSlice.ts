import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import BASEURL from '../../baseURL';
import getHeaders from '../requestHeaders';

type Task = {
  id: string; // Task ID
  title: string;
  description: string;
  status: string;
  priority: string;
  expiry_date: string;
};

const token: any = localStorage.getItem('token');

// Action

export const editTaskAction = createAsyncThunk(
  'task/edit',
  async (data: { id: string; taskData: Task }, thunkApi) => {
    try {
      const { id, taskData } = data;
      const response = await axios.put<Task>(
        BASEURL + `api/tasks/${id}`,
        taskData,
        { headers: getHeaders(token) }
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      console.log(error.response);
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

interface EditTaskState {
  data: Task | null;
  error: string | null;
  loading: boolean;
}

const initialState = {
  data: null,
  error: null,
  loading: false,
} as EditTaskState;

const editTaskSlice = createSlice({
  name: 'editTask',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(editTaskAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editTaskAction.fulfilled, (state, action: PayloadAction<Task>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(editTaskAction.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
        console.log(state.error);
      });
  },
});

export default editTaskSlice.reducer;
