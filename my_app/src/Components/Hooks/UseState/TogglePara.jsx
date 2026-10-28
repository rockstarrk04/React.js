import React, { useState } from 'react'

const TogglePara = () => {
    let [para , setPara] =  useState(true)
    let handleClick = () => {
        setPara(!para)
    }
  return (
    <>
      <button onClick={handleClick}>
        {para ? "Show Para" : "Hide Para"} 
      </button>
      {para ? <></> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur eos, est similique ipsum nisi magni porro nulla tempora in nobis, nostrum aliquid laboriosam, corporis animi earum commodi repudiandae voluptatibus.</p>}
    </>
  )
}

export default TogglePara
