import React from 'react'

const Dcomp = (props) => {
    let remaining = props.rs50 - 10
    
  return (
    <>
      <h1>I am in D component</h1>
      <h3>D has received {remaining}.00/-</h3>
    </>
  )
}

export default Dcomp
