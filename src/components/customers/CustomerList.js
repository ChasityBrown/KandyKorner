import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const CustomerList = () => { //function/component that will render html with browser
    const [customers, updateCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    updateCustomers(data)
                 }
                )
        },
        []
    )
    return (
        <>
        <h2>Customers</h2>
        {
            customers.map(
                (customerObject) => { 
                    return <p key= {`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}