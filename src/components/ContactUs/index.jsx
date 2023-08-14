import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div id='page-main' className='margin-default'>
      <h1>Contact Us</h1>
      <ul className='udc-left fdc'>
        <li>Phone: 650-872-2354</li>
        <li>General Questions - Info@norcalcycles.com</li>
        <li>Sales Department - Sales@norcalcycles.com</li>
        <li>Service Department - Service@norcalcycles.com</li>
        <li>Used Parts Department - Parts@norcalcycles.com</li>
        <li>Address - 1585-1587 El Camino Real Millbrae, CA 94030</li>
      </ul>
      
      <h1>Our Hours</h1>
        <ul className='udc-left fdc page-list'>
          <li>Tuesday - Friday: 10am to 7pm</li>
          <li>Saturday: 10am to 5pm</li>
          <li>Closed for Lunch: 12pm to 1pm</li>
          <li>Closed Sundays & Mondays</li>
          <li>Closed All Holidays </li>
        </ul>
    </div>
  )
}

export default ContactUs
