import React, { useState } from 'react'

export default function Coutner({count, handleIncrement, handleDecrement, id}) {
    

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => handleIncrement(id)}>Increment</button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
