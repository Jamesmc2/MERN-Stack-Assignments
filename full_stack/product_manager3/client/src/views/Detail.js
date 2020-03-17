import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/get_products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props.id])   
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/get_products/' + id + '/delete')
            .then(res => {
                navigate('/get_products')
            })
    }
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.descrip}</p><br/>
            <Link to={`/get_products/${props.id}/edit`}>Edit</Link><br />
            <button onClick={(e)=>{deleteProduct(props.id)}}>
                        Delete
                    </button>
        </div>
    )
}
