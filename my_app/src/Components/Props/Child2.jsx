import React from "react"

const Child2 = (props) => {
    let {data}= props
    let {username,dob} = data
    let age = new Date().getFullYear() - dob.slice(0,4)
    return(
        <>
            <div className="child2">
                <h2>I am in child-2 Component</h2>
                <h3>{props.data.username} is from {props.data.place}</h3>
                <h3>{username} age is {age}</h3>
            </div>
        </>
    )
}
export default Child2