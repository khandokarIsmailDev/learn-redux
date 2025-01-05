import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../freatures/posts/postSlice'

export default function Posts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

  if(posts.isLoading){
    return <div>Loading...</div>
  }
  if(posts.isError){
    return <div>Error: {posts.error}</div>
  }
  return (
    <div>
      {posts.posts.map((post)=>(
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
