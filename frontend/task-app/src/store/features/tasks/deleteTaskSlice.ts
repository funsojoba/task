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


export const deleteTaskAction = createAsyncThunk(
    'task/delete',
    async (id: string, thunkApi) => {
      try {
        await axios.delete(BASEURL + `api/tasks/${id}`, { headers: getHeaders(token) });
        setInterval(function () {
            window.location.href = "/dashboard";
        }, 1500);
        return id; // Return the deleted task ID
      } catch (error: any) {
        const message = error.message;
        console.log(error.response);
        return thunkApi.rejectWithValue(error.response.data.msg);
      }
    }
  );


  interface DeleteTaskState {
    deletedId: string | null;
    error: string | null;
    loading: boolean;
  }

  const initialState = {
    deletedId: null,
    error: null,
    loading: false,
  } as DeleteTaskState;

  const deleteTaskSlice = createSlice({
    name: 'deleteTask',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(deleteTaskAction.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(deleteTaskAction.fulfilled, (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.deletedId = action.payload;
        })
        .addCase(deleteTaskAction.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          state.loading = false;
          console.log(state.error);
        });
    },
  });

  export default deleteTaskSlice.reducer;
