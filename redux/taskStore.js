import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name:"taskSlice",
    initialState:{
        tasks:{
            id:null,
            name:"",
            isCompleted:false

        },
    },
    reducers:{
        setTasks(state,action){
            state.tasks = action.payload;
        },
    },
})
export const {setTasks} = taskSlice.actions;
export default taskSlice.reducer;