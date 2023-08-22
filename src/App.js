import React, { useRef } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Bikes from './components/Bikes';
import Parts from './components/Parts';
import Rentals from './components/Rentals';
import Service from './components/Service';
import Splash from './components/Splash';
import NavBar from './components/NavBar'
import Header from './components/Header';
import Footer from './components/Footer';
import Financing from './components/Financing'

const App = () => {
  const headerRef = useRef(null)

  return (
      <BrowserRouter>
        <Header headerRef={headerRef} />
        <NavBar/>
        <article id="page-main" className='padding-default'>

        <Routes>
            <Route path="/" exact element={<Splash/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/bikes" element={<Bikes/>} />
            <Route path="/rentals" element={<Rentals/>} />
            <Route path='/financing' element={<Financing/>}/>
            <Route path="/service" element={<Service/>} />
            <Route path="/parts" element={<Parts/>} />
        </Routes>
        </article>

        <Footer headerRef={headerRef}/>
      </BrowserRouter>
  );
};

export default App;
