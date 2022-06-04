import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authServices from '../../api/services/authServices'
import jwtDecode from 'jwt-decode';

const initialState = {
    user: {},
    value: 0,
}

export const login = createAsyncThunk(
    'counter/loginStatus',
    async (data) => {
        return authServices.login(data.username, data.password)
    }
);


export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
       
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            return {
                ...state,
                value: state.value + action.payload.value
            }
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(login.fulfilled, (state, action) => {
          // Add user to the state array
          
          const decode=jwtDecode(action.payload.accesToken)
          state.user=decode
        })
      },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export const selectAuth = (state) => state.counter;

export default authSlice.reducer