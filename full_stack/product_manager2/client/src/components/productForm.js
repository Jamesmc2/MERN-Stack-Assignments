import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [descrip, setDescrip] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/add_product', {
            title,
            price,
            descrip,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescrip(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
