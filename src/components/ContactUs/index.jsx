import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div id='page-main' className='padding-default'>
      <h1>Contact Us</h1>
      <ul className='udc-left fdc page-list'>
        <li>Phone: <span className='cursor-events'>650-872-2354</span></li>
        <li>General Questions - <span className='cursor-events'>Info@norcalcycles.com</span></li>
        <li>Sales Department - <span className='cursor-events'>Sales@norcalcycles.com</span></li>
        <li>Service Department - <span className='cursor-events'>Service@norcalcycles.com</span></li>
        <li>Used Parts Department - <span className='cursor-events'>Parts@norcalcycles.com</span></li>
        <li>Address - <span className='cursor-events'>1585-1587 El Camino Real Millbrae, CA 94030</span></li>
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
