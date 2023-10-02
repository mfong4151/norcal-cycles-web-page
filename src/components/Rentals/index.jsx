import React from 'react'
import './rentals.css'
import rentalsPage from '../../assets/rentals-page.avif'
const Rentals = () => {
  return (
    <>
      <div id='plain-txt-page' className='se'>
        <section>
          <h1>Rentals</h1>
          <p>Nor-Cal Cycles offers a variety of motorcycles for rent.</p>
          <p>Visit our <a href='https://rentalpowersports.com/'>rental store </a></p>
          <p>Contact us for more info - Let's have you riding today!</p>
        </section>
        <section className='udc'>
          <img id='rentals-page-img' src={rentalsPage} alt="" />
        </section>
      </div>
    </>
  )
}

export default Rentals
