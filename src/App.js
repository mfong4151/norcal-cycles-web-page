import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Inventory from './components/inventory';
import Parts from './components/Parts';
import Rentals from './components/Rentals';
import Service from './components/Service';
import Splash from './components/Splash';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/parts" component={Parts} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/service" component={Service} />
      </Switch>
    </Router>
  );
};

export default App;
