import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../generics/Button";
import './Navbar.css';
import logo from '../../assets/storaid-logo.svg';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="storeid-logo" />
       </Link>
      <nav className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
        
        <Button label="Book Now" />
        

    </header>
  );
}

export default Navbar;
