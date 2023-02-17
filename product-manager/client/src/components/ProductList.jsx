import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {allProducts, setAllProducts} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((allProducts) => {
            setAllProducts(allProducts.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className='mt-5 w-75 mx-auto border'>
            <h2>All Products:</h2>
            {
                allProducts.map((product) => (
                    <div key={product._id}>
                    <Link to={`/oneProduct/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }
        </div>

)}

export default ProductList;