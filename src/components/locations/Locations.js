import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const Locations = () => { //function/component that will render html with browser
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationsArray) => {
                    setLocations(locationsArray)
                 }
                )
        },
        []
    )
    return (
        <>
        <h2>Locations</h2>
        {
            locations.map(
                (locationObject) => { 
                    return <p key= {`location--${locationObject.id}`}>{locationObject.name}: {locationObject.address}</p>
                }
            )
        }
        </>
    )
}