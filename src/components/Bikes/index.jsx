import React, { useState, useRef, useEffect } from 'react'
import BikeGrid from './BikeGrid'
import Search from '../Search'
import { createContext } from "react";
import {testBikes} from '../../testBikes/testBikes'
export const BikeContext = createContext();


//Probably will do a fetch for bikes here
const Bikes = () => {
    //Temporary bikes solution
    const allBikes = Object.values(testBikes)
    const [bikes, setBikes] = useState(allBikes);
    const h1Ref = useRef(null)

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

  console.log(bikes)
  useEffect(()=>{
    h1Ref.current.scrollIntoView({behavior:'smooth'})
  }, [])
    
  return (
    <>
    <h1 ref={h1Ref}>Our Bikes</h1>
      <BikeContext.Provider value ={bikeStates}>
        <Search bikes={bikes} setBikes={setBikes}/>
        <BikeGrid bikes={bikes} bikeStates={bikeStates}/>   
      </BikeContext.Provider>
      </>
  )
}

export default Bikes
