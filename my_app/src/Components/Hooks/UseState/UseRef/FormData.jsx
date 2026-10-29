import React, { useRef } from 'react'

const FormData = () => {
    const input = useRef()

    let handleClick = (e) => {
        e.preventDefault()
        let fname = input.current[0].value
        let lname = input.current[1].value
        console.log(`My name is ${fname} ${lname}`);
    }


  return (
    <>
      <div className="hooks">
        <div className="container">
            <form ref={input} >
                <input type="text" placeholder='Enter First Name'/><br />
                <input type="text" placeholder='Enter Last Name'/><br />
                <button onClick={handleClick}>
                    Print Name
                </button>
            </form>
        </div>
      </div>
    </>
  )
}

export default FormData