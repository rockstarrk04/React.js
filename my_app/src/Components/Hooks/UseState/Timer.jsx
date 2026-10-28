import React, { useState } from 'react'

const Timer = () => {
    let [timer , setTimer] = useState(10)

    let handleClick = () => {

        let t = setInterval(() => {
            setTimer(`expire within ${--timer} sec`)
        }, 1000);

        setTimeout(() => {
            clearInterval(t)
            setTimer("Time UP!!") 
            setTimeout(() => {
                setTimer(10)
            }, 1000); 
        }, 10000);
    }
  return (
    <div>
      <div className="hooks">
        <div className="header">
            <h1>useState hooks : </h1>
            <h3>Timer</h3>
        </div>

        <div className="timer">
            <button onClick={handleClick}>
                Click Here
            </button>

            <h3>{timer}</h3>
        </div>


      </div>
    </div>
  )
}

export default Timer
