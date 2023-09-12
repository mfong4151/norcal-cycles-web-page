import React,  { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import useWindowSize from '../../hooks/useWindowSize';

const Navbar = () => {

  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const {windowWidth, windowHeight} = useWindowSize();
  const handleOnClick = (event) => {
    if (windowWidth < 920) return

    const clickedLink = event.target;
    setUnderlineStyle({
      width: clickedLink.offsetWidth,
      left: clickedLink.offsetLeft
    });
  };

  useEffect(()=>{
    if (windowWidth < 920)  setUnderlineStyle({});
  
  }, [windowWidth])

  return (
      <nav ref={navRef}>
        <ul>
          <li><NavLink onClick={handleOnClick} to="/about-us">About Us</NavLink></li>
          <li><NavLink onClick={handleOnClick} to="/contact-us">Contact Us</NavLink></li>
          <li><NavLink onClick={handleOnClick} to="/bikes">Bikes</NavLink></li>
          <li><NavLink onClick={handleOnClick} to="/rentals">Rentals</NavLink></li>
          <li><NavLink onClick={handleOnClick} to="/service">Service</NavLink></li>
          <li><a onClick={handleOnClick} href="https://www.ebay.com/str/norcalcycles" target="_blank">Parts</a></li>
          <li><NavLink onClick={handleOnClick} to ="/financing">Financing</NavLink></li>
        </ul>
        <div className="underline" style={underlineStyle}></div>
      </nav>

  );
};

export default Navbar;
