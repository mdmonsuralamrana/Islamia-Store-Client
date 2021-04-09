import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://islamia-store.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-dark">
                <Link to="/manageProduct" class="nav-link text-white" href="#">Manage Product</Link>
                <Link to="/AddProduct" class="nav-link text-white" href="#">Add Product</Link>
            </div>
            <div className="col-md-9">
                {
                    products.map(product =><ManageSingleProduct key={product._id} product={product} ></ManageSingleProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;