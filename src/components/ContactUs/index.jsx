import React from 'react'
import './ContactUs.css'
import handleSave from '../../utils/handleSave'
const ContactUs = () => {


  return (
    <>
      <section>
        <h1>Contact Us</h1>
        <ul className='udc-left fdc page-list'>
          <li>Phone: <span id='Phone Number' className='cursor-events' onClick={handleSave}>650-872-2354</span></li>
          <li>General Questions - <span id='questions' className='cursor-events' onClick={handleSave}>Info@norcalcycles.com</span></li>
          <li>Sales Department - <span id='sales' className='cursor-events' onClick={handleSave}>Sales@norcalcycles.com</span></li>
          <li>Service Department - <span id='service' className='cursor-events' onClick={handleSave}>Service@norcalcycles.com</span></li>
          <li>Used Parts Department - <span id='parts' className='cursor-events' onClick={handleSave}>Parts@norcalcycles.com</span></li>
          <li>Address - <span id='address' className='cursor-events' onClick={handleSave}>1585-1587 El Camino Real Millbrae, CA 94030</span></li>
        </ul>
        
        <h1>Our Hours</h1>
          <ul className='udc-left fdc page-list'>
            <li>Tuesday - Friday: 10am to 7pm</li>
            <li>Saturday: 10am to 5pm</li>
            <li>Closed for Lunch: 12pm to 1pm</li>
            <li>Closed Sundays & Mondays</li>
            <li>Closed All Holidays </li>
          </ul>
      </section>
      <section>
        <img src="" alt="" />
      </section>  
    </>

  )
}

export default ContactUs
