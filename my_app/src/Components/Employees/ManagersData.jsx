import React from "react";

const ManagersData = (props) => {
    // console.log(props);
    let {onlyManagers} = props    

    return(
        <>
            <div className="display">
                <h2>Managers Data</h2>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <td>SINO</td>
                                <td>Emp ID</td>
                                <td>Emp Name</td>
                                <td>SALARY</td>
                                <td>DESIGNATION</td>
                                <td>DATE OF JOINING</td>
                                <td>EXPERIENCE</td>
                            </tr>
                        </thead>
                        <tbody>
                            {onlyManagers.map((elem,index) => {
                                let {empId , name , salary , desg , doj} = elem
                                return(
                                    <tr key={index}>
                                        <th>{index+1}</th>
                                        <td>{empId}</td>
                                        <td>{name}</td>
                                        <td>{salary}</td>
                                        <td>{desg}</td>
                                        <td>{doj}</td>
                                        <td>{new Date().getFullYear() - doj.slice(0,4)} Years</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManagersData