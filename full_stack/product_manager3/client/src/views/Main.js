import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/productForm';
import { Link } from '@reach/router';

export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_products')
            .then(res => {
                setProducts(res.data);

            });
    }, [])
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/add_product', product)
            .then(res => {
                setProducts([...products, res.data])
            })
    }
    return (
        <div>
            <ProductForm
                onSubmitProp={createProduct}
                initialTitle=''
                initialPrice=''
                initialDescrip=''
            />
            <hr />
            <div>
                {products.map((product, idx) => {
                    return <Link to={'/get_products/' + product._id} id={product._id} key={idx}>{product.title}<br />
                    </Link>
                })}
            </div>
        </div>
    )
}
