import React from 'react'
import Copywrite from './Copywrite';
import Gallery from '../Gallery';
const Splash = () => {
  //Create a gallery component for all of the portals where they sell things
  //Rentals, Inventory, and their parts store
  //Use a useEffect with a set interval to navigate between gallery options,  include a cleanup function
  // Create a bunch of elements which has the following copy

  const imageObjs = [
    {
      image: "f",
      text: 'Our bikes'
    },
    {
      image: "a",
      text:'Rentals'
    },
    {
      image: "a",
      text:'Services'
    },
    {
      image: "a",
      text:'Parts'
    },
  ]

  return (
    <div id='page-main'>
        <Gallery imageObjs={imageObjs}/>
        <Copywrite/>
    </div>
  )
}

export default Splash;