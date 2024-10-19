import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink to manage active state
import './navBar.css'; // Ensure you import the new CSS

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">

      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className="nav-item" 
            exact 
            activeClassName="active-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className="nav-item" 
            activeClassName="active-link"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className="nav-item" 
            activeClassName="active-link"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
