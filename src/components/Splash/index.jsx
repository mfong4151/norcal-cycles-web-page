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
      text: 'The first phot'
    },
    {
      image: "a",
      text:'The second one'
    }
  ]

  return (
    <div id='page-main'>
        <Gallery imageObjs={imageObjs}/>
        <Copywrite/>
    </div>
  )
}

export default Splash;