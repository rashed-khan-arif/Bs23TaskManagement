import { createSlice } from '@reduxjs/toolkit'
import { ADD_TASK } from '../actions/taskActionTypes'

const initialState = {
    tasks: [{
        id: 1,
        title: "Task 1",
        description: "Task 1"
    },
    {
        id: 2,
        title: "Task 2",
        description: "Task 2"
    }
    ],
}

export const taskSlice = createSlice({
    name: ADD_TASK,
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    },
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer