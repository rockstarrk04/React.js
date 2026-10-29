import React, { useRef } from 'react'

const Example1 = () => {

    const elem = useRef()
    const elem1 = useRef()
    let handleClick = () => {
        elem.current.innerText = "React JS"
    }

    let handleClick1 = () => {
        let btn = elem1.current
        if (btn.innerText === "ON"){
            btn.innerText = "OFF"
            btn.style.cssText = "background : red ; color : white"
        } else {
            btn.innerText = "ON"
            btn.style.cssText = "background : green ; color : white"
        }
    }
  return (
    <>
        <h1>UseRef</h1>
        <h2 ref={elem}>Welcome</h2>
        <button onClick={handleClick}>Click Here</button>

        <br /><br />
        <button ref={elem1} onClick={handleClick1}>
            ON
        </button>
    </>
  )
}

export default Example1