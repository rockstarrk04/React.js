import React, { useContext } from 'react'
import {Fname , Lname} from './CompA'
import CompE from './CompE'

const CompD = () => {
    const fname = useContext(Fname)
    const lname = useContext(Lname)
  return (
    <div>
      <h1>I'm in Component D</h1>
      <h3>My name is {fname} {lname}</h3>
        <CompE/>
    </div>
  )
}

export default CompD
