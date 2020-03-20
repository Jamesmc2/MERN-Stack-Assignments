import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/authorForm';


export default ({id}) => {
    const [author,setAuthor]=useState({})   
    useEffect(() => { 
        axios.get('http://localhost:8000/api/get_authors/' + id)
            .then(res => {
                setAuthor(res.data)  
            })
    }, [id])
    const updateAuthor = updated_author=> {
        axios.put('http://localhost:8000/api/get_authors/' + id +'/edit',updated_author
        )
            .then(navigate(`/get_authors/${id}`))
    }
    return (
        <div>
            <h1>Update {author.first_name}</h1>
            <AuthorForm onSubmitProp={updateAuthor} 
            initialFirstName={author.firstName} 
            initialLastName={author.lastName} 
            initialFavoriteColor={author.favoriteColor}/>
        </div>
    )
}
