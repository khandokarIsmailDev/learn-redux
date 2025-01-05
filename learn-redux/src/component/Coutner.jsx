import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Coutner() {
    const counters = useSelector(state => state.counters)
    console.log(counters)

  return (
    <div>
      <h1>Count: {counters[0].value}</h1>
      <h1>Count: {counters[1].value}</h1>
      
    </div>
  )
}
