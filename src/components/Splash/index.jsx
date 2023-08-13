import React from 'react'
import Copywrite from './Copywrite';
const Splash = () => {
  //Create a gallery component for all of the portals where they sell things
  //Rentals, Inventory, and their parts store
  //Use a useEffect with a set interval to navigate between gallery options,  include a cleanup function
  // Create a bunch of elements which has the following copy
  return (
    <div>
        

        <Copywrite/>
    </div>
  )
}

export default Splash


// import React, { useState, useEffect } from 'react';

// const Splash = () => {
//   const galleryOptions = ['Rentals', 'Inventory', 'Parts']; // List of gallery options
//   const [currentOption, setCurrentOption] = useState(0); // Index of the current gallery option

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Switch to the next gallery option
//       setCurrentOption((prevOption) => (prevOption + 1) % galleryOptions.length);
//     }, 5000); // Change gallery every 5 seconds

//     return () => {
//       // Cleanup: clear the interval
//       clearInterval(intervalId);
//     };
//   }, []);

//   const galleryText = `We are local motorcycle enthusiasts owned, One-Stop Motorcycle Dealer serving the San Francisco Bay Area & Beyond!
// - Used Motorcycle Sales\n- Helmets, Gloves & Apparel\n- NEW O.E.M. & Aftermarket Parts\n- USED O.E.M. & Aftermarket Parts\n- Maintenance Service, Customization & Repairs\n- In-House Dyno for Custom Maps, Tuning & Flashes
// View our Pre-Owned Inventory online! We Buy Motorcycles!\nBUY - SELL - TRADE - CONSIGNMENTS\nFinancing is available through our many lenders O.A.C.
// We stock thousands of new & used parts - Shop online 24/7 at ebay.com/str/norcalcycles\n Anything not in stock, contact us!`;

//   return (
//     <div>
//       {/* Gallery */}
//       <div className="gallery">
//         <h2>Gallery: {galleryOptions[currentOption]}</h2>
//         {/* You can display images related to each gallery option */}
//       </div>

//       {/* Text */}
//       <div className="text">
//         <p>{galleryText}</p>
//       </div>
//     </div>
//   );
// };

// export default Splash;
