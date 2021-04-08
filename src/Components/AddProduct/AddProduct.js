import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL , setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addProduct`;
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
                    <input name="name" defaultValue="Product Name" ref={register} />
                    <br/>
                    <input name="price" defaultValue="Product Price" ref={register} />
                    <br/>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;