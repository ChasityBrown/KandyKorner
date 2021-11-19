import React, { useState } from "react"
import { useHistory } from "react-router"

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        locationId: "",
        manager: false,
        fullTime: false,
        hourlyRate: 1
    })

    const history = useHistory()
    
    const hireEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            // .then(res => res.json())
            .then(() => {
                history.push("/employees")

            })
        
        }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Hire New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.locationId = evt.target.value
                                updateEmployee(copy)
                            }
                    }
                    required autoFocus
                    type="text" 
                    className="form-control"
                    placeholder="Which Store?" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                    }
                    type="checkbox" 
                     />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Time:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                    }
                    type="checkbox" 
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = evt.target.value
                                updateEmployee(copy)
                            }
                    }
                    required autoFocus
                    type="text" 
                    className="form-control"
                    placeholder="USD" />
                </div>
            </fieldset>
            <button onClick={hireEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
    )            
} 
