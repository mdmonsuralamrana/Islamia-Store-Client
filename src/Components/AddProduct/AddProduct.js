import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL , setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        }
        const url = `https://islamia-store.herokuapp.com/addProduct`;
        fetch(url , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
    };
    
    const handleImageUpload = product => {
        const imageData = new FormData();
        imageData.set('key', '987c8c3f77cb2690c72b2a88a8951b02');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-dark">
                <Link to="/manageProduct" class="nav-link text-white" href="#">Manage Product</Link>
                <Link to="/addProduct" class="nav-link text-white" href="#">Add Product</Link>
            </div>
            <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="add-product" name="name" type="text" placeholder="Product Name" ref={register} />
                    <input className="add-product" name="price" placeholder="Product Price" ref={register} />
                    <input className="add-product" name="weight" placeholder="Product Weight" ref={register} />
                    <input className="add-product" name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <input className="submit-btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;