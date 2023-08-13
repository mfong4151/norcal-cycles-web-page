import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


const Navbar = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/inventory">Inventory</NavLink>
          </li>
          <li>
            <NavLink to="/parts">Parts</NavLink>
          </li>
          <li>
            <NavLink to="/rentals">Rentals</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
        </ul>
      </nav>

  );
};

export default Navbar;
