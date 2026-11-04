import React, { useRef, useState } from 'react'

const UncontrolledReactForm2 = () => {

    let formData = useRef()
    let [output , setoutput] = useState()

    let handleSumit = (event) => {
        event.preventDefault()
        let fname = formData.current[0].value
        let lname = formData.current[1].value
        setoutput(`My name is ${fname} ${lname}`)
    }


  return (
    <div>
      <div className="react-forms">
        <h2>Un-controlled React Forms - 2</h2>
        <div className="formbox">
            <h3>Print Details</h3>
            <form ref={formData} onSubmit={handleSumit}>
                <input type="text" placeholder='Enter First Name' required/>
                <input type="text" placeholder='Enter Last Name' required/>
                <button>Submit</button>
            </form>
            <h3>{output}</h3>
        </div>
      </div>
    </div>
  )
}

export default UncontrolledReactForm2
