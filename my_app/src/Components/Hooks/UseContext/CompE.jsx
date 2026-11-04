import React, { useContext } from 'react'
import { UserData } from './CompA'


const CompE = () => {
    const user = useContext(UserData)
    let { firstname , lastname , dob} = user

  return (
    <div>
      <h1>I'm in Component E</h1>
      <h1>My name is {user.firstname}</h1>,
      <h2>{firstname} age is {user.age()}</h2>
    </div>
  )
}

export default CompE
