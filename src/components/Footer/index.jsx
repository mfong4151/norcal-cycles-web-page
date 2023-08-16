import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const handleOnClick = () =>{
    

  }
  return (
    <footer >
      <div className='fdr se footer-main'>
        <div className="fdc footer-section">
          <h3>Nor-Cal Cycles</h3>
          <p>1585-1587 El Camino Real Millbrae, CA 94030</p>
          <p>Call us: <span>650-872-2354</span></p>
        </div>
        <div className="fdc footer-section">
          <h3>Quick Links</h3>
          <NavLink className="quick-link" to='/bikes'>Bikes</NavLink>
          <NavLink className="quick-link" to='/rentals'>Rentals</NavLink>
          <NavLink className="quick-link" to='/'>Our Services</NavLink>
          <a className="quick-link" href='https://www.ebay.com/str/norcalcycles' target="_blank">Parts</a>
        </div>

        <div className="fdc footer-section">
          <h3>Store Hours</h3>
          <ul className='fdc'>
          
            <li>Tuesday - Friday: 10am to 7pm</li>
            <li>Saturday: 10am to 5pm</li>
            <li>Closed for Lunch: 12pm to 1pm</li>
            <li>Closed Sundays & Mondays</li>
            <li>Closed All Holidays</li>
              
          </ul>
        </div>
        <div className="fdc footer-section">
          <h3>Connect</h3>
          <div>

          </div>
          <h3 onClick={handleOnClick}>Scroll to top</h3>
        </div>
      </div>
      <div id='dcs-copy' className='udc'>
          Powered by DCS Software 2023
      </div>
    </footer>
  )
}

export default Footer;
