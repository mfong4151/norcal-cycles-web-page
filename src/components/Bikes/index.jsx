import React, { useEffect, useReducer, useRef } from 'react'
import BikeGrid from './BikeGrid'
import Search from '../Search'

const Bikes = () => {

  // const [bikes, dispatch] = useReducer()
    //do a fetch for bikes here
  const h1Ref = useRef(null)
  const bikeOptions =  [{
    picture: 'picture',
    make: 'make 1',
    model: 'model 1',
    year: 'year',
}, 
]
const bikes = [1, 2, 3, 4, 5, 6,7, 8, 9, 10,
                11, 21 ,31 ,41 ,51 ,617, 81 ,91 ,101
                   ] //temporary bikes simulation
    
  return (
    <div id='page-main' className='padding-default'>
      <h1 ref={h1Ref}>Our Bikes</h1>
      <Search/>
      <BikeGrid bikes={bikes}/>   
    </div>
  )
}

export default Bikes
