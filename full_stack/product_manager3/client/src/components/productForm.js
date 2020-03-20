import React, { useState } from 'react'
export default props => {
    const {onSubmitProp, initialTitle, initialPrice, initialDescrip} = props
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [descrip, setDescrip] = useState(initialDescrip);
    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({title,price,descrip})
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={descrip} onChange = {(e)=>setDescrip(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
