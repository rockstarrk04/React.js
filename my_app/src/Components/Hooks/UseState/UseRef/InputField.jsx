import React, { useRef } from 'react'

const InputField = () => {
    const input = useRef()
    const h2 = useRef()
    let val;

    let handleClick = () => {
        val = input.current.value
        h2.current.innerText = val
    }
  return (
    <div>
        <div className="hooks">
            <div className="header">
                <h2>UseRef</h2>
                <h3>Input Field</h3>
            </div>

            <div className="container">
                <input  ref={input} type="text" placeholder='Enter UserName'/>
                <button onClick={handleClick}>Print Name</button>

                <h2 ref={h2}></h2>
            </div>
        </div>
    </div>
  )
}

export default InputField
