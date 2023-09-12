import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const DisplayProds = () => {

    const [products, setProducts] = useState([])

    // Component Did Mount Equivalent
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    },[])

    return <div>
        {
            products.map(product => <ProductCard productData={product}/>)
        }
    </div>
}

export default DisplayProds