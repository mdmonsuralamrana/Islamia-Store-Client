import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch('https://islamia-store.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="container home mt-5">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Home;