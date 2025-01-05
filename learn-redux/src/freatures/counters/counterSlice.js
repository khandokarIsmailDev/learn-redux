import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
]

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state, action) =>{
            const findIndex = state.findIndex((item) => item.id === action.payload)
            state[findIndex].value++
        },
        decrement:(state,action) =>{
            const findIndex = state.findIndex((item) => item.id === action.payload)
            state[findIndex].value--
        }
    }
})

export default counterSlice.reducer;  // "reducers" hobe na; aikhane "reducer" hobe
export const {increment, decrement} = counterSlice.actions;
