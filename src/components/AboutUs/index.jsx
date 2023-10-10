import React from 'react';
import './about.css';
import aboutUs from '../../assets/about-us.avif'
const index = () => {


  return (
    <>
      <div id="plain-txt-page">
      <section>
        <h1>About Nor-Cal Cycles:</h1>
        <p>The One-Stop Motorcycle Dealer serving the San Francisco Bay Area & Beyond.</p>

         <p>As a team of motorcycle enthusiasts, we provide:</p>

            <ul className='udc-left fdc page-list'>
                <li>- Used Motorcycle Sales</li>
                <li>- Helmets, Gloves & Apparel</li>
                <li>- NEW O.E.M. & Aftermarket Parts</li>
                <li>- USED O.E.M. & Aftermarket Parts</li>
                <li>- Maintenance Service, Customization & Repairs</li>
                <li>- In-House Dyno for Custom Maps, Tuning & Flashes</li>
            </ul>
            <p>View our Pre-Owned Inventory online! We Buy Motorcycles!</p>
            <p>BUY - SELL - TRADE - CONSIGNMENTS</p>
            <p>Financing is available through our many lenders O.A.C.</p>
            <p>We stock thousands of new & used parts see our store <a href='https://www.ebay.com/str/norcalcycles' target='_blank'>here</a></p>
            <p>Don't see it on our site? contact us!</p>
      </section>
      <section className='udc'>
        <img id='about-us' src={aboutUs} alt="" />
      </section>
      </div>

    </>
  );
};

export default index;