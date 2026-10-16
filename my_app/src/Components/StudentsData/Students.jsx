import { StudentsData } from "./studentdatabase"
import './studentsdata.css'

const Students = () =>{
    console.log(StudentsData);
    return(
        <>
            <div className="students">
                <h1>Students Data Base</h1>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>SI.NO</th>
                                <th>STUDENT NAME</th>
                                <th>DEGREE</th>
                                <th>STREAM</th>
                                <th>DOB</th>
                                <th>AGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StudentsData.map((elem , index) => {
                                let {id , fname , lname , degree , stream , dob } = elem
                                
                                // TODO : Calculate Age
                                let birthyear = dob.slice(0,4)
                                let dateObj = new Date()
                                let age = dateObj.getFullYear() - birthyear
                                return(
                                    <tr key={index}>
                                        <td>{index + 1}.</td>
                                        <td>{fname} {lname}</td>
                                        <td>{degree}</td>
                                        <td>{stream}</td>
                                        <td>{dob}</td>
                                        <td>{age}</td>
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

export default Students