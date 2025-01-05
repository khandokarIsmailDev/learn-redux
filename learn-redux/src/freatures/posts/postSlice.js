import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postApi"

const initialState ={
    posts:[],
    isLoading:false,
    isError:false,
    error:null
}

//step2:async thunk craete korbo; ja 2 number step; r "builder.addCase()" default ai bebi likte hobe
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const posts = await getPosts()
    return posts
})

//setp1
const postSlice = createSlice({
    name:"posts",
    initialState,
    //asynccronous use use korbo tai "reducers" use kora jabe na
    extraReducers:(builder) =>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.isError = false
            state.isLoading = true
        });
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.posts = action.payload
        });
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
        });
    }
})

export default postSlice.reducer