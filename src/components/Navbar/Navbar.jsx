import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src/assets/navlogo.png" alt="MobiusEngine Logo" className="navbar-image" />
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#more">More <span className="dropdown-icon">▼</span></a></li>
      </ul>

      <div className="navbar-right">
        <button className="navbar-button">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
