import React from 'react'
import Copywrite from './Copywrite';
import Gallery from '../Gallery';
import galleryItems from './galleryItems';

const Splash = () => {
  //Create a gallery component for all of the portals where they sell things
  //Rentals, Inventory, and their parts store
  //Use a useEffect with a set interval to navigate between gallery options,  include a cleanup function
  // Create a bunch of elements which has the following copy

  

  return (
    <div id='page-main'>
        <Gallery imageObjs={galleryItems} transitionTime={7000}/>
        <Copywrite/>
    </div>
  )
}

export default Splash;