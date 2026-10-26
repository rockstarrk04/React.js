import React from 'react'
import Dcomp from './Dcomp'

const Ccomp = (props) => {
    let rs50 = props.rs90 - 40    
  return (
    <>
      <h1>I am in C component</h1>
      <h3>C has received {rs50}.00/-</h3>
      <Dcomp rs50 = {rs50} />
    </>
  )
}

export default Ccomp
