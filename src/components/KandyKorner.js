import React from "react" // allows us to use all of the features that come with the react library
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
export const KandyKorner = () => { //function/component that will render html with browser
    return (
        <>
        <h1>Kandy Korner</h1>
        <NavBar/>
        <ApplicationViews/>
        
        </>
    )
}