import React, { useRef, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Bikes from './components/Bikes';
import BikeShow from './components/BikeShow';
import Parts from './components/Parts';
import Rentals from './components/Rentals';
import Service from './components/Service';
import Splash from './components/Splash';
import NavBar from './components/NavBar'
import Header from './components/Header';
import Footer from './components/Footer';
import Financing from './components/Financing'
import AboutUs from './components/AboutUs'
import { parseTxt } from './utils/parseTxt';

const App = () => {
  const headerRef = useRef(null)
  const [bikes, setBikes] = useState([]);
  
 
  return (
    <BrowserRouter>
      <Header headerRef={headerRef} />
      <NavBar />
      <body id='page-main-bound' className='udc'>
        <article id="page-main" className='padding-default'>
          <Routes>
            <Route path="/" exact element={<Splash />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path='/bike/:id' element={<BikeShow bikes={bikes}/>} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path='/financing' element={<Financing />} />
            <Route path="/service" element={<Service />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="*" element={<Splash />} />
            <Route path="/bikes" element={<Bikes allBikes={bikes} />} />
          </Routes>
        </article>
      </body>
      <Footer headerRef={headerRef} />
    </BrowserRouter>
  );
};

export default App;
