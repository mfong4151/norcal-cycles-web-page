import React, { useRef } from 'react';
import { HashRouter } from 'react-router-dom';
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

const App = () => {
  const headerRef = useRef(null)

  return (
      <HashRouter>
        <Header headerRef={headerRef} />
        <NavBar/>
        <article id="page-main" className='padding-default'>
          <Routes>
              <Route path="/" exact element={<Splash/>} />
              <Route path='/about-us' element={<AboutUs/>}/>
              <Route path="/contact-us" element={<ContactUs/>} />
              <Route path='/bike/:id' element={<BikeShow/>}/>
              <Route path="/bikes" element={<Bikes/>} />
              <Route path="/rentals" element={<Rentals/>} />
              <Route path='/financing' element={<Financing/>}/>
              <Route path="/service" element={<Service/>} />
              <Route path="/parts" element={<Parts/>} />
              <Route path="*" element={<Splash/>} />
          </Routes>
        </article>

        <Footer headerRef={headerRef}/>
      </HashRouter>
  );
};

export default App;
