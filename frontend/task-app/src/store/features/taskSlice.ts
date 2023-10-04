import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import BASEURL from "../baseURL";

export interface Task {
    id: string,
    title: string,
    description: string,
    status: string,
    priority: string,
    expiry_date: string
}


export interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks:[],
}


  export const addTask = createAsyncThunk('tasks/add',async (name:string) => {
        const response = await fetch(BASEURL+'tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": `Bearer randomshit`
            },
            body: JSON.stringify({name})
        })

        const data = await response.json();
        return data;

  })


  export const fetchInfo = createAsyncThunk(
    "tasks/fetchInfo", async(thunkApi) => {
        const response = await fetch(`${BASEURL}`,);
        const data = await response.json();

        return data;
    }
  )


  const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      addTask: (state, action: PayloadAction<Task>)=>{
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInfo.fulfilled, (state, action)=>{
            state.tasks = action.payload;
        });

        // builder.addCase(addTask.fulfilled, (state, action)=>{
        //     state.tasks.push(action.payload);
        // })
    }
  });


  export const getInfoData = (state:any) => state.task.tasks;
  export default taskSlice.reducer;
//   export const { addTask } = taskSlice.actions;
