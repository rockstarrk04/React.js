import React, { useState } from 'react'
import './updateName.css'

const UpdateName = () => {
    let [name , setName] = useState("Hello")
    let [name1 , setName1] = useState("Javascript")
    let [para , setPara] = useState("")

    let handleClick = () =>{
        setName("Welcome")
    }

    let handleClick1 = () =>{
      setName1(<span style={{color: "red"}}>React</span>)
    }

    let handlepara = () => {
      setPara(<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut laboriosam impedit tempore, magnam corporis ullam architecto praesentium debitis totam voluptatum fugiat temporibus, unde quae consequatur quidem. Fuga, explicabo optio!</span>)
    }

  return (
    <>
      <center>
        <h1>Hooks : useState </h1>
        <h2>Update Name</h2> <br /><br /><br /><br />

        <h1>{name}</h1>
        <br />
        <button onClick={handleClick}>
          Click Here
        </button>
        


        <br /><br />
        <h1>I love {name1}</h1>
        <button onClick={handleClick1}>
          Click here
        </button>
        <br /><br />


        <br /><br /><br /><hr /><br /><br />
        
        <div className="box">
          <button onClick={handlepara}>Display Para</button>
          <p>{para}</p>
        </div>



      </center>
    </>
  )
}

export default UpdateName