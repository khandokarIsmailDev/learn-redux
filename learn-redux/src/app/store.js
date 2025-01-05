import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../freatures/counters/counterSlice";
import postReducer from "../freatures/posts/postSlice";

const store = configureStore({
    reducer:{
        counters:counterReducer,  // default export howai, counterSlice er name change kore counterReucer disi 
        posts:postReducer
    }
})

export default store;