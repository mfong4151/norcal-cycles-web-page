import React, { useState, useRef, useEffect} from 'react'
import BikeGrid from './BikeGrid'
import Search from '../Search'
import { createContext } from "react";
import { testBikes } from '../../testBikes/testBikes'
import { parseTxt } from '../../utils/parseTxt';
export const BikeContext = createContext();

//need to tel lthem how to receive it
// Motor trader website, send them a sample and where to send it
//ftp 
//json file 
// needs to see what we're doing for hostings 

// sales@dcsonline.com

const Bikes = ({allBikes}) => {
  //Temporary bikes solution

  
  const bikeGridRef = useRef()
  const [bikes, setBikes] = useState(allBikes);
  
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trans, setTrans] = useState('');
  const [yearStart, setYearStart] = useState(0);
  const [yearEnd, setYearEnd] = useState(0);
  const [priceStart, setPriceStart] = useState(0);
  const [priceEnd, setPriceEnd] = useState(0);


  useEffect(() => {
    async function loadBikes() {
        const bikeData = await parseTxt();
      
        setBikes(bikeData);
    }

    loadBikes();
}, []);


  const bikeStates = {

    make, setMake,
    model, setModel,
    trans, setTrans,
    yearStart, setYearStart,
    yearEnd, setYearEnd,
    priceStart, setPriceStart,
    priceEnd, setPriceEnd,
  };

  return (
    <>
      <h1 ref={bikeGridRef} id='our-bikes'>Bike Inventory</h1>
      <BikeContext.Provider value={bikeStates}>
        <Search allBikes={allBikes} setBikes={setBikes} />
        <BikeGrid bikes={bikes} bikeStates={bikeStates} bikeGridRef={bikeGridRef} />
      </BikeContext.Provider>
    </>
  )
}

export default Bikes
