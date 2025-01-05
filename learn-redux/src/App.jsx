import React from 'react'
import Coutner from './component/Coutner'
import Posts from './component/Posts'


export default function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-blue-500' >Hello World</h1>
      <Coutner/>
      <Posts/>
    </div>
  )
}
