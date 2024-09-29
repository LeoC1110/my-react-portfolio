//Navbar.js, Ligeng Cai, 301286463, 9/28/2024 
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
