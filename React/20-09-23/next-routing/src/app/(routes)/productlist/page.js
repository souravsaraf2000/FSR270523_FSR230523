"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const List = () => {
    const {push} = useRouter()
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>{
            setProducts(res.data.products)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            {
                products.length > 0 && products.map(product => <div onClick={()=>push(`/product/${product.id}`)}><img src={product.thumbnail}/></div>)
            }
        </div>
    )
}

export default List