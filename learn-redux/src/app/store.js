import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../freatures/counters/counterSlice";

const store = configureStore({
    reducer:{
        counters:counterReducer  // default export howai, counterSlice er name change kore counterReucer disi 
    }
})

export default store;