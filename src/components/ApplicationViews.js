//This is a Controller Component. Its only responsibility to 
//control the behavior of the system and maps URLs to components.
import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/ProductList"
import { Locations } from "./locations/Locations"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <Locations />
            </Route>
            <Route path="/products">
                <ProductList/>
            </Route>
            <Route exact path="/employees">
                <EmployeeList/>
            </Route>
            <Route path="/employees/form">
                <EmployeeForm/>
            </Route>
        </>
    )
}
