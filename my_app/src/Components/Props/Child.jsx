import React from "react"

const Child = (props)=>{
    // console.log(props);
    props.fun("hii")
    return(
        <>
            <div className="child">
                <h2>I am in Child Component</h2>
                <h3>{props.name} fav number is {props.num}.</h3>
            </div>
        </>
    )
}
export default Child