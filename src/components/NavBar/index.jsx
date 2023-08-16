import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


const Navbar = () => {
  return (
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          <li><NavLink to="/bikes">Bikes</NavLink></li>
          <li><NavLink to ="/financing">Financing</NavLink></li>
          <li><NavLink to="/rentals">Rentals</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><a href="https://www.ebay.com/str/norcalcycles" target="_blank">Parts</a></li>
        </ul>
      </nav>

  );
};

export default Navbar;
