import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="container home mt-5">
            {
                products.map(product => <Product  product={product}></Product>)
            }
        </div>
    );
};

export default Home;