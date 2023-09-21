"use client"

import axios from "axios"
import { useEffect, useState } from "react"

const Product = (props) => {
    const [details, setDetails] = useState({})
    useEffect(()=>{
        console.log(props)
        axios.get(`https://dummyjson.com/products/${props.params.prodId}`)
        .then(res => setDetails(res.data))
        .catch(err => console.log(err))
    },[])
    return <div>
        <h1>Product Details Page</h1>
        <h1>{details.title}</h1>
        <h1>{details.price}</h1>
    </div>
}

export default Product