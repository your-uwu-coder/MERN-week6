import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProductForm.css';

const ProductForm = (props) => {
    const navigate = useNavigate();
    const {allProducts, setAllProducts} = props; 
    const [errors, setErrors] = useState({})
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    })

    const handleInputChange = (e) => {
        console.log(e)
        console.log(e.target.name)
        console.log(e.target.value)
        setProduct(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postProduct', product)
        .then((res) => {
            setAllProducts([...allProducts, res.data])
            window.location.reload(false);
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }



    return (
        <div className="mt-3">
            <h2>Item Form</h2>
            <form onSubmit={submitHandler}>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label" >Title:</label>
                    <div className="col-sm-10">
                        <input type="text" name="title" className="form-control" onChange={handleInputChange} value={product.title}/>
                        {
                            errors.title ?
                            <p className="text-danger">{errors.title.message}</p>:
                            null
                        }

                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price:</label>
                    <div className="col-sm-10">
                        <input type="text" name="price" className="form-control" onChange={handleInputChange} value={product.price} />
                        {
                            errors.price ?
                            <p className="text-danger">{errors.price.message}</p>:
                            null
                        }
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-3 col-form-label">Description:</label>
                    <div className="col-sm-9">
                        <input type="text" name="description" className="form-control" onChange={handleInputChange} value={product.description} />
                        {
                            errors.description ?
                            <p className="text-danger">{errors.description.message}</p>:
                            null
                        }
                    </div>
                </div>  
                <button className="btn btn-success">Submit</button>          
            </form>
        </div>
)}

export default ProductForm;