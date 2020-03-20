import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/productForm';


export default props => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [descrip, setDescrip] = useState();

    useEffect(() => { 
        axios.get('http://localhost:8000/api/get_products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescrip(res.data.descrip);
            })
    }, [id])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/get_products/' + id +'/edit', {
            title,price,descrip
        })
            .then(res => navigate(`/get_products/${id}`))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <ProductForm onSubmitProp={updateProduct} initialTitle={title} initialPrice={price} initialDescrip={descrip}/>
        </div>
    )
}
