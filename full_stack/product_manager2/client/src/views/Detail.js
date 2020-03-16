import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default ({id}) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/get_products/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [id])
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.descrip}</p>
        </div>
    )
}
