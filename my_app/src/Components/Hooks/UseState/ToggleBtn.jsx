import React, { useState } from 'react'
import './toggleBtn.css'

const ToggleBtn = () => {
    let [bool , setBool] = useState(true)

    let handleBool = () => {
        setBool(!bool)
    }

    let onBtn = {
        color : "green",
        border : "solid 1px green"
    }

    let offBtn = {
        color : "red",
        border : "solid 1px red"
    }

  return (
    <div>
      <div className="hooks">
        <div className="header">
            <h1>useState Hooks</h1>
            <h3>Toggle Button</h3>

            <div className="tg-btn">
                {/* <button 
                    onClick={handleBool} 
                    // style={bool ? {color : "green"} : {color : "red" }}
                    style={bool ? onBtn : offBtn }
                >
                    {bool ? "ON" : "OFF"}
                </button> */}
                <button
                    onClick={handleBool}
                    className={bool ? "on" : "off"}
                >
                    {bool ? "ON" : "OFF"}
                </button>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default ToggleBtn
