import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/authorForm';
import { Link } from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_authors')
            .then(res => {
                setAuthors(res.data);

            });
    }, [])
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/get_authors/' + id + '/delete')
            .then(res => {
                setAuthors(authors.filter(author => author._id !== id));
            })

    }
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/add_author', author)
            .then(res => {
                setAuthors([...authors, res.data])
            })
    }
    return (
        <div>
            <AuthorForm
                onSubmitProp={createAuthor}
                initialFirstName=''
                initialLastName=''
                initialFavoriteColor=''
            />
            <hr />
            <div>
                {
                    authors.map((author, idx) => {
                        return (
                            <div key={idx}>
                                <p>{author.firstName}</p>
                                <Link id={author._id} to={`/get_authors/${author._id}`}>Details</Link>
                                <Link id={author._id} to={`/get_authors/${author._id}/edit`}>Edit</Link>
                                <button onClick={() => deleteProduct(author._id)}>Delete</button>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
