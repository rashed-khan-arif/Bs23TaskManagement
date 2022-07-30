import { createSlice } from '@reduxjs/toolkit'
import { ADD_TASK } from '../actions/taskActionTypes'

const initialState = {
    tasks: [],
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