import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="col-md-2 bg-dark">
            <Link to="/manageProduct" class="nav-link text-white">Manage Product</Link>
            <Link to="/AddProduct" class="nav-link text-white">Add Product</Link>
        </div>
    );
};



export default Admin;