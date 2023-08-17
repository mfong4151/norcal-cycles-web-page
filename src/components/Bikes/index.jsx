import React from 'react'
import BikeGrid from './BikeGrid'
import Search from '../Search'

const Bikes = () => {
  return (
    <div id='page-main' className='padding-default'>
      <h1>Our Bikes</h1>
      <Search/>
      <BikeGrid/>
        
    </div>
  )
}

export default Bikes
