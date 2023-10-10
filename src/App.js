import React, { useRef, useEffect } from 'react';
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
import { parseTxt } from './utils/parseTxt';

const App = () => {
  const headerRef = useRef(null)
  const [bikes, setBikes] = useState({});
    
    useEffect(() => {
        async function loadBikes() {
            const bikeData = await parseTxt();
            const bikeCache = {};
            
            bikeData.forEach(bike => {
                // Assuming each bike has a unique ID, using DealerID for this example
                bikeCache[bike.DealerID] = bike;
            });

            setBikes(bikeCache);
        }

        loadBikes();
    }, []);
  return (
    <HashRouter>
      <Header headerRef={headerRef} />
      <NavBar />
      <div id='page-main-bound' className='udc'>
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
            <Route path="/bikes" element={<Bikes bikes={bikes} />} />
          </Routes>
        </article>
      </div>
      <Footer headerRef={headerRef} />
    </HashRouter>
  );
};

export default App;
