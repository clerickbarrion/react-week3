import React, { useState } from 'react'

export default function Counter() {
    let [number,setNumber] = useState(0)
    function decrement(){setNumber(number-1)}
    function increment(){setNumber(number+1)}
    return (
        <>
        <button onClick={decrement}>-</button>
            <p>{number}</p>
        <button onClick={increment}>+</button>
        </>
    )
}
