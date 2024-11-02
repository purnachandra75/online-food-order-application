// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import AppStore from './AppStore';

const Header = () => {
  const items=useSelector((store)=>store.cart.items)
  return (
    <div className="Header-container">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="header-details">
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px' }}>
           <Link to='/'>home</Link> 
            
          </li>
          <li style={{ margin: '10px' }}>
          <Link to='/about'>About</Link></li>
          <li style={{ margin: '10px' }}>
          <Link to='/contact'>Contact</Link></li>
          <li style={{ margin: '10px' }}>
          <Link to='/cart'>Cart-{items.length}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
