import React from 'react'
import Bcomp from './Bcomp'

const Acomp = () => {
    let money = 100
  return (
    <>
      <h1>I am in A component</h1>
      <h3>A has sent {money}.00/-</h3>
      <Bcomp money = {money}/>
    </>
  )
}

export default Acomp