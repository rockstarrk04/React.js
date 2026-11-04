import React, { useRef } from 'react'
import '../reactforms.css'


const UncontrolledReactForm1 = () => {

  const fnameInput = useRef()
  const lnameInput = useRef()
  const placeInput = useRef()
  const dateInput = useRef()
  const display = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    let fname = fnameInput.current.value
    let lname = lnameInput.current.value
    let place = placeInput.current.value
    let dob = dateInput.current.value 
    
    display.current.innerText = `My name is ${fname} ${lname} , I am from ${place} , I am ${new Date().getFullYear() - dob.slice(0,4)} years old.`
  }
  
  return (
    <div>
      <div className="react-forms">
        <h2>Un-controlled React Forms</h2>
        <div className="formbox">
            <form action="" onSubmit={handleSubmit}>
                <h3>Form</h3>
                <input ref={fnameInput} type="text" placeholder='Enter your First Name' required/>
                <input ref={lnameInput} type="text" placeholder='Enter your Last Name' required/>
                <input ref={placeInput} type="text" placeholder='Enter Place' required/>
                <input ref={dateInput} type='date' required/>
                <button>Print Name</button>
            </form>
            <h3 ref={display}></h3>
        </div>
      </div>
    </div>
  )
}

export default UncontrolledReactForm1
