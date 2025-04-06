import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        stats: 'checking',
        uid: null,
        email: null,
        displayNmae: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers:{
        register:(state, action) => {
            state.email = action.payload.email
        },
        logout:(state, action) => {

        },
        checkingCredentials:(state, action) =>{
            console.log('checking')
        }
    }
})

export const {register, logout, checkingCredentials} = authSlice.actions