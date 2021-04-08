import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container">
          <Link to="/" class="navbar-brand text-white" href="#">Islamia Store</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto px-5">
              <li class="nav-item">
                <Link to="/" class="nav-link text-white" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item text-white">
                <Link to="/orders" class="nav-link active text-white" aria-current="page" href="#">Orders</Link>
              </li>
              <li class="nav-item text-white">
                <Link to="/admin" class="nav-link active text-white" aria-current="page" href="#">Admin</Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link active text-white" aria-current="page" href="#">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;