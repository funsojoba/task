import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import BASEURL from '../../baseURL';
import getHeaders from '../requestHeaders';


const token: any = localStorage.getItem('token')


type Task = {
    id: string,
    title: string,
    description: string,
    status: string,
    priority: string,
    expiry_date: string
}

export const getTaskAction = createAsyncThunk(
    "task/get",
    async (data:{id?:string}, thunkApi) => {
        try {
            const response = await axios.get<Task>(
                BASEURL + "api/tasks/"+ data,
                {headers:getHeaders(token)}
            )
            return response.data;
        } catch(error:any){
            const message = error.message
            console.log(error)
            return thunkApi.rejectWithValue(error.response.data.msg)
        }
    }
)

interface TaskState {
    data: Task | null,
    error: string | null,
    loading: boolean
}

const initialState = {
    data: null,
    error: null,
    loading: false
} as TaskState;


const getTaskSlice = createSlice({
    name: "getTask",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getTaskAction.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(getTaskAction.fulfilled, (state, action: PayloadAction<Task>)=>{
                state.loading = false
                state.data = action.payload
            })
            .addCase(getTaskAction.rejected, (state, action: PayloadAction<any>)=>{
                state.error = action.payload
                state.loading = false
                console.log(state.error)
            })
    }
  })
  export default getTaskSlice.reducer;
