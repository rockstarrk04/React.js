import React from "react"
import { empdata } from "./empdata"
import './emp.css'
import ManagersData from "./ManagersData"
import DevelopersData from "./DevelopersData"

const Employees = () =>{
    const onlyManagers = empdata.filter((elem) => {
        return elem.desg === "Manager"
    })

    const onlyDeveloper = empdata.filter((elem) => {
        return elem.desg === "Developer"
    })
    
    return(
        <>
            <div className="emp">
                <h1>Employee Details</h1>
                <ManagersData onlyManagers = {onlyManagers}/>
                <DevelopersData onlyDeveloper = {onlyDeveloper}/>
            </div>
        </>
    )
}

export default Employees
