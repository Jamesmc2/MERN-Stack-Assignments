import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default (props) => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/get_authors/" + props.id)
            .then(res => setAuthor(
                res.data
            ))
    }, [props.id])   
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/get_authors/' + id + '/delete')
            .then(res => {
                navigate('/')
            })
    }

    return (
        <div>
            <h2>{author.firstName} {author.lastName}</h2>
            <p>Favorite Color: {author.favoriteColor}</p>
            <Link to={`/get_authors/${props.id}/edit`}>Edit</Link><br />
            <button onClick={(e)=>{deleteAuthor(props.id)}}>
                        Delete
                    </button>
        </div>
    )
}
