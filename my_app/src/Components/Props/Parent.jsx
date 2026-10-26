import React from "react"
import Child from "./Child"
import Child2 from "./Child2"
import Child3 from "./Child3"

const Parent =()=>{
    let fname = "Sunil"
    let user = {
        username : "Sunil",
        place : "Madakasira",
        dob : "2005-05-06",
        degree : "BE",
        stream : "ECE"
    }

    let skills = ['HTML','CSS','JS','REACT JS']
    let demo = (text)=>{
        console.log(text)
    }

    return(
        <>
            <div className="parent">
                <h1>I am in Parent component</h1>
                <Child num={100} name={fname} fun={demo}/>
                <Child2 data={user}/>
                <Child3 name={"Sunil"} arr={skills}/>
            </div>
        </>
    )
   
}
export default Parent