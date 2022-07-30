import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice'
import memberReducer from './slices/memberSlice'

export const store = configureStore({
    reducer: {
        task: taskReducer,
        member: memberReducer
    },
})