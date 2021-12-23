import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { getProductById } from "home/products"

const PdpContent = () => {
    const { id = 1 } = useParams() ;
    const [product,setProduct] = useState(null)

    useEffect(() => {
        if(id){
            getProductById(id).then(setProduct)
        } else {
            setProduct(null)
        }
    },[id])

    if(!product) return null;

    return(
        <div className="my-5">
            <div className="flex justify-between">
            <span>{product.name}</span>
            <span>{product.price}</span>
            </div>
            <p className="text-xl">{product.description}</p>
        </div>
    )
}

export default PdpContent;