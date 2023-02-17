import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((product) => {
                setProduct(product.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch ((err) => {
                console.log(err)
            })
    }

    return (
        <div className="card mt-3 w-25 mx-auto">
            <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            </div>

            <div className="d-flex justify-content-evenly"> 
            <Link to={`/updateProduct/${product._id}`} className="btn btn-secondary btn-sm mb-2">Edit</Link>
            <button onClick={deleteHandler} className="btn btn-danger btn-sm mb-2">Delete</button>
            </div>
        </div>
)}

export default OneProduct;