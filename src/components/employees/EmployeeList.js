import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library
import { useHistory } from "react-router"

export const EmployeeList = () => { //function/component that will render html with browser
    const [employees, changeEmployee] = useState([])
    const history = useHistory()
        useEffect(
            () => {
                fetch("http://localhost:8088/employees?_expand=location")
                    .then(res => res.json())
                    .then((data) => {
                        changeEmployee(data)
                    })
            },
            []
        )
    
    return (
        <>
        <div>
                <button onClick={() => history.push("/employees/form")}>Add New Employee</button> 
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}-{employee.location.name}</p>
                    }
                )
            }
        </>
    )
}