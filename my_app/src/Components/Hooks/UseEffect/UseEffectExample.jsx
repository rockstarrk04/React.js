import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

  let [count , setCount] = useState(0)

  useEffect(() => {
    alert('I am side Effect')
  },[])

  let [text , setText] = useState('Click here to Download')
  
  let handleText = () => {
    let memory = 11;
    if (memory > 50) {
      setText("Downloading...")
    } else{
      setText("Memory Full..")
    }
    
  }
  return (
    <>
      <div className="hooks">
        <div className="header">
          <h2>UseEffect</h2>
        </div>
      </div>

      <div className="container counter">
        <button onClick={() => setCount(count + 1)}>➕</button>
        <h2>{count}</h2>
        <button onClick={() => count > 0 ? setCount(count - 1) : alert('invalid')}>➖</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <hr />
      <h2>{text}</h2>
      <button onClick={handleText}>Click here</button>
    </>
  )
}

export default UseEffectExample
