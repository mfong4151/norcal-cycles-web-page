import React from 'react'
import handleSave from '../../utils/handleSave'

const Service = () => {
  

  return (
    <>
      <h1>Services</h1>
      <h2>Nor-Cal Cycles services and repairs most makes and models of motorcycles.</h2>

      <p>Keeping your motorcycle safe on the road or track is our number one priority.</p>
      <p>We have an in-house dynamometer; offering custom flashing and tuning.</p>
      <p>Please contact us by phone or email if you have any questions or to make an appointment.</p>
      <h2>Please contact us by phone or email if you have any questions or to make an appointment:</h2>
      <ul className='udc fdc page-list'>
        <li>Phone: <span id='phone number' className='cursor-events' onClick={handleSave}>650-872-2354</span> Ext.1</li>
        <li>Email: <span id='email' className='cursor-events' onClick={handleSave}>Service@norcalcycles.com</span></li>
      </ul>

    </>
  )
}

export default Service
