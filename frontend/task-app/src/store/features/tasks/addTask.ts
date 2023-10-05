import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import BASEURL from '../../baseURL';
import getHeaders from '../requestHeaders';


type Task = {
    title: string,
    description: string,
    status: string,
    priority: string,
    expiry_date: string
}
const token: any = localStorage.getItem('token')

// Action

export const addTaskAction = createAsyncThunk(
    "task/add",async (data:Task, thunkApi) => {
        try {
            const response = await axios.post<Task>(
                BASEURL + "api/tasks",
                data=data, {headers:getHeaders(token)}
            )
            setInterval(function () {
                window.location.href = "/dashboard";
            }, 1500);
            return response.data;
        }catch(error:any){
            return thunkApi.rejectWithValue(error.response.data.msg)
        }
    }
)


interface AddTaskState {
    data: Task | null,
    error: string | null,
    loading: boolean
}

const initialState = {
    data: null,
    error: null,
    loading: false
} as AddTaskState;



const addTaskSlice = createSlice({
    name: "addTask",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(addTaskAction.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(addTaskAction.fulfilled, (state, action: PayloadAction<Task>)=>{
                state.loading = false,
                state.data = action.payload
            })
            .addCase(addTaskAction.rejected, (state, action: PayloadAction<any>)=>{
                state.error = action.payload
                state.loading = false

            })
    }
})

export default addTaskSlice.reducer;
