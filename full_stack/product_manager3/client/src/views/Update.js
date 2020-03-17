import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


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
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/get_products/' + id +'/edit', {
            title,
            price,
            descrip
        })
            .then(res => navigate(`/get_products/${id}`))
            
            
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="descrip"
                    value={descrip} 
                    onChange={(e) => { setDescrip(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
