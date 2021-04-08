import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageFood = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-dark">
                <Link to="/manageFood" class="nav-link text-white" href="#">Manage Food</Link>
                <Link to="/AddProduct" class="nav-link text-white" href="#">Add Food</Link>
            </div>
            <div className="col-md-9">
                {
                    products.map(product =><ManageSingleProduct product={product} ></ManageSingleProduct>)
                }
            </div>
        </div>
    );
};

export default ManageFood;