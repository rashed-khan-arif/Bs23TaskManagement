import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './slices/TaskSlice'

export const store = configureStore({
    reducer: {
        task: taskSlice
    },
})