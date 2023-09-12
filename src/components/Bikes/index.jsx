import React, { useState, useEffect, useRef } from 'react'
import BikeGrid from './BikeGrid'
import Search from '../Search'
import { createContext } from "react";
import {testBikes} from '../../testBikes/testBikes'
export const BikeContext = createContext();


//Probably will do a fetch for bikes here
const Bikes = () => {
    //Temporary bikes solution
    const bikeGridRef = useRef()

    const allBikes = Object.values(testBikes)
    const [bikes, setBikes] =useState(allBikes);
  
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [trans, setTrans] = useState('');
    const [yearStart, setYearStart] = useState(0);
    const [yearEnd, setYearEnd] = useState(0);
    const [priceStart, setPriceStart] = useState(0);
    const [priceEnd, setPriceEnd] = useState(0);
    
    const bikeStates = {
    
      make, setMake,
      model, setModel,
      trans, setTrans,
      yearStart, setYearStart,
      yearEnd, setYearEnd,
      priceStart, setPriceStart,
      priceEnd, setPriceEnd,
    };
    useEffect(()=>{
      bikeGridRef.current.scrollIntoView({behavior:'smooth'})
    }, []) 

  return (
    <>
      <h1 ref={bikeGridRef} id='our-bikes'>Bike Inventory</h1>
      <BikeContext.Provider value ={bikeStates}>
        <Search allBikes={allBikes} setBikes={setBikes}/>
        <BikeGrid bikes={bikes} bikeStates={bikeStates} bikeGridRef={bikeGridRef}/>   
      </BikeContext.Provider>
      </>
  )
}

export default Bikes
