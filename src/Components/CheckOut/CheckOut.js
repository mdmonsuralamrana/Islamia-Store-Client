import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {id} = useParams();

    const [product , setProduct] = useState({});

    useEffect(() => {
        fetch(`https://islamia-store.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])

    const {name, price} = product;
    
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckOut;