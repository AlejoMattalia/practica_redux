import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    name: string
    email: string
}

const initialState: UserState = {
    name: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {

            const { name, email } = action.payload

            state.name = name
            state.email = email
        },
        logout: (state) => {
            state.name = ''
            state.email = ''
        },
    },
})

export const { addUser, logout } = userSlice.actions
export default userSlice.reducer