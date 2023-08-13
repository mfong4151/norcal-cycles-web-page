import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Inventory from './components/Inventory';
import Parts from './components/Parts';
import Rentals from './components/Rentals';
import Service from './components/Service';
import Splash from './components/Splash';
import NavBar from './components/NavBar'
import NorCalHeader from './components/NorCalHeader';

const App = () => {
  return (
      <BrowserRouter>
        <NorCalHeader/>
        <NavBar/>

        <Routes>
          <Route path="/" exact element={<Splash/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/parts" element={<Parts/>} />
          <Route path="/rentals" element={<Rentals/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
