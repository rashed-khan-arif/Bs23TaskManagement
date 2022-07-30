import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './slices/taskSlice'
import memberReducer from './slices/memberSlice'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const store = configureStore({
    reducer: {
        task: taskReducer,
        member: memberReducer,
        toastr: toastrReducer
    },
})