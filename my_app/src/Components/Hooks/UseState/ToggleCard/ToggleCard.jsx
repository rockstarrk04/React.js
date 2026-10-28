import React, { useState } from 'react'
import OneCard from './OneCard'

const ToggleCard = () => {
    let [bool , setBool] = useState(true)

    let handleClick = () => {
        setBool(!bool)
    }
  return (
    <div>
      <button onClick={handleClick}>
        {bool ? "Display Card" : "Hide Card"}
      </button>
      {bool ? "" : <OneCard/>}
    </div>

  )
}

export default ToggleCard
