import React from 'react'
import Ccomp from './Ccomp'

const Bcomp = (props) => {
    let rs90 = props.money - 10
    
  return (
    <>
      <h1>I am in B component</h1>
      <h3>B has received {rs90}.00/-</h3>
      <Ccomp rs90 = {rs90}/>
    </>
  )
}

export default Bcomp
