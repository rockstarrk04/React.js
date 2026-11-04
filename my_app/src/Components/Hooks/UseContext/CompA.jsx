import React, { createContext } from 'react'
import CompB from './CompB'


export const Fname = createContext()
export const Lname = createContext()
export const UserData = createContext()

const CompA = () => {
    let fnm = "Ram"
    let lnm = "kumar"
    let userdata = {
    firstname : "krishna",
    lastname : "kumar",
    dob : "2002-06-01",
    place : "Goa",
    age(){
        return new Date().getFullYear() - this.dob.slice(0,4)
    }
}

  return (
    <div>


      <h1>I'm in Component A</h1>
      <Fname.Provider value={fnm}>
        <Lname.Provider value={lnm}>
            <UserData.Provider value={userdata}>
                <CompB/>
            </UserData.Provider>
        </Lname.Provider>
      </Fname.Provider>


    </div>
  )
}

export default CompA