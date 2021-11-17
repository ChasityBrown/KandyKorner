import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const ProductList = () => { //function/component that will render html with browser
    const [products, updateProduct] = useState([])
    // const [specialty, modifySpecialty] = useState([])
        useEffect(
            () => {
                fetch("http://localhost:8088/products")
                    .then(res => res.json())
                    .then((data) => {
                        updateProduct(data)
                    })
            },
            []
        )
    
        // useEffect(() => {
    
        //     const showSpecialties = employees.map(employee => employee.specialty) 
        //         return modifySpecialty(showSpecialties.join(", "))
            

        // }, [employees])
    return (
        <>
        <div>
                Products
            </div>
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>{product.id} {product.name} ${product.price} {product.productTypeId} </p>
                    }
                )
            }
        </>
    )
}