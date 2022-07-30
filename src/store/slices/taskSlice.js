import { createSlice } from '@reduxjs/toolkit'
import { ADD_TASK } from '../actions/taskActionTypes'

const initialState = {
    tasks: [{
        id: 1,
        title: "T1",
        description: "desc",
        memberId: 1
    }],
    taskAdded: false
}

export const taskSlice = createSlice({
    name: ADD_TASK,
    initialState,
    reducers: {
        addTask: (state, action) => {
            debugger;
            console.log("Creating task...")
            // console.log(state.tasks)
            let newTask = { ...action.payload, id: state.tasks.length + 1 };
            state.tasks = [...state.tasks, { ...newTask }]
            state.taskAdded = true;
        },
        clearTaskState: (state) => {
            state.taskAdded = false;
        }
    },
})

export const { addTask, clearTaskState } = taskSlice.actions

export default taskSlice.reducer