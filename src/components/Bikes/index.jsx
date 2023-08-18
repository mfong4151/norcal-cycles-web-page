import React, { useState, useRef } from 'react'
import BikeGrid from './BikeGrid'
import Search from '../Search'
import { createContext } from "react";

export const BikeContext = createContext();

const Bikes = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [trans, setTrans] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');
    const [priceStart, setPriceStart] = useState('');
    const [priceEnd, setPriceEnd] = useState('');
    const bikeStates = {
    
      make, setMake,
      model, setModel,
      trans, setTrans,
      yearStart, setYearStart,
      yearEnd, setYearEnd,
      priceStart, setPriceStart,
      priceEnd, setPriceEnd,
    };

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
      <BikeContext.Provider value ={bikeStates}>
          <Search/>
        <BikeGrid bikes={bikes} bikeStates={bikeStates}/>   
      </BikeContext.Provider>
    </div>
  )
}

export default Bikes
