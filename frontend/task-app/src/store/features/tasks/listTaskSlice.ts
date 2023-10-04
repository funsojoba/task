import { PayloadAction, createAsyncThunk, createSlice,  } from "@reduxjs/toolkit"
import BASEURL from "../../baseURL";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

import getHeaders from "../requestHeaders";


type Task = {
    id: string,
    title: string,
    description: string,
    status: string,
    priority: string,
    expiry_date: string
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NjQ1NTIwNSwianRpIjoiZWViNjYzODctMjE1MC00MjI2LWEwNDctMDEzNGNiMDhjNTk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjk2NDU1MjA1LCJleHAiOjE2OTY0NTYxMDV9.sFB7zS2KhmOe0iTmoeORpL_sJ-nxMYr4vfCbzY1ixgU"


//  ACTION

export const getTasks = createAsyncThunk(
  "task/getTasks",async (data, thunkApi) => {
    try{
      const response = await axios.get<Task[]>(
        BASEURL+"api/tasks" , {headers:getHeaders(token)}
      )
     console.log(response.data)
      return response.data;
    } catch(error: any){
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)



interface TaskState {
    data: Task[] | null,
    error: string | null,
    loading: boolean
}

const initialState = {
    data: null,
    error: null,
    loading: false
} as TaskState;


// Slice

const listTaskSlice = createSlice({
  name: "getTasks",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(getTasks.pending, (state, action)=>{
        state.loading = true
      })
      .addCase(getTasks.fulfilled, (state, action: PayloadAction<Task[]>)=>{
        state.loading = false
        state.data = action.payload
      })
      .addCase(getTasks.rejected, (state, action: PayloadAction<any>)=>{
        state.error = action.payload
        state.loading = false
        console.log(state.error)
      })
  }
})
export default listTaskSlice.reducer;
