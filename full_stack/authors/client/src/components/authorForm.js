import React, { useState } from 'react'

export default props => {
    const {onSubmitProp, initialFirstName, initialLastName, initialFavoriteColor} = props
    const [firstName, setFirstName] = useState(initialFirstName); 
    const [lastName, setLastname] = useState(initialLastName);
    const [favoriteColor, setFavoriteColor] = useState(initialFavoriteColor);
    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({firstName,lastName,favoriteColor})
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input name='firstName' type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input name='lastName' type="text" value={lastName} onChange = {(e)=>setLastname(e.target.value)}/>
            </p>
            <p>
                <label>Favorite Color</label><br/>
                <input name='favoriteColor' type="text" value={favoriteColor} onChange = {(e)=>setFavoriteColor(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
