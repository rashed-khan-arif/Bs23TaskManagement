import { createSlice } from '@reduxjs/toolkit'
import { ADD_MEMBER } from '../actions/memberActionTypes'

const initialState = {
    members: [{
        id: 1,
        name: "Rashed Khan",
        email: "rashed@gmail.com"
    },
    {
        id: 2,
        name: "Arif Khan",
        email: "rashed@gmail.com"
    },
    ]
}

export const memberSlice = createSlice({
    name: ADD_MEMBER,
    initialState,
    reducers: {
        addMembers: (state, action) => {
            state.members.push(action.payload)
        }
    },
})

export const { addMembers } = memberSlice.actions

export default memberSlice.reducer