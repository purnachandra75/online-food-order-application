// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

import Body from './Body';
import About from './About';
import Contact from './Contact';
import Restarentmenu from './Restarentmenu';
import Cart from './Cart';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/resturentMenu/:resid' element={<Restarentmenu />} />
        

      </Routes>
    </Router>
  );
};

export default App;
