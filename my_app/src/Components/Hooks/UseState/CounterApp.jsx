import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {
    let [count , setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () => {
        count > 0 ? setCount(count - 1) : alert("Invalid Option")
    }

  return (
    <>
    <div className="hooks">
    <div className="header">
        <h1>useState hooks: </h1>
        <h3>Counter App</h3>
    </div>
    </div>

    <div className="counter">
        <button onClick={handleDec}>➖</button>
        <h1>{count}</h1>
        <button onClick={handleInc}>➕</button>
    </div>
    
    </>
  )
}

export default CounterApp
