import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, price, weight, imageURL, _id} = props.product;
    return (
    <div className="card product-card">
        <div className="card-img-box">
            <img src={imageURL} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
            <h5 className="card-title mb-4">{name} ~ {weight}</h5>
            <div className="d-flex">
                <h4 className="card-text text-primary">$ {price}</h4>
                <Link to={'/product/'+_id} className="btn btn-primary"> Buy Now</Link>
            </div>
        </div>
    </div>
    );
};

export default Product;