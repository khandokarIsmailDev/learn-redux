import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../freatures/counters/counterSlice';

export default function Counter() {
    const counters = useSelector(state => state.counters)
    console.log(counters)
    const dispatch = useDispatch()

    const handleIncrement = (id) => {
        dispatch(increment(id))
    }
    const handleDecrement = (id) => {
        dispatch(decrement(id))
    }

    return (
        <div>
            {counters.map((counter) => (
                <div key={counter.id}>
                    <h1>Count: {counter.value}</h1>
                    <button onClick={() => handleIncrement(counter.id)}>Increment</button>
                    <button onClick={() => handleDecrement(counter.id)}>Decrement</button>
                </div> 
            ))}
        </div>
    )
} 