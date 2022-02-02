import React from 'react';
import {NavLink } from "react-router-dom";
import '../css/navbar.css';
import '../css/header.css';

import Fire from '../assets/fire-icon.jpg'; 
import Diamond from '../assets/diamond.jpg';
import Temple from '../assets/temple.png';
import Chimpanzee from '../assets/Chimpanzee.jpg';

function Navbar() {
  return <div>
    <nav className='nav-wrapper'>
      <NavLink to='/' className='link'><img src={Fire} className='icon' />24h Trending</NavLink>
      <NavLink to="/latestshows"  className='link' >Latest Shows</NavLink>
      <NavLink to="/MostPopular" className='link'>Most Popular</NavLink>
      <NavLink to="/ingenesis"  className='link'><img src={Diamond} className='icon'/>In Genesis</NavLink>
      <NavLink to="/intemple"  className='link'><img src={Temple} className='icon'/>In Temple</NavLink>
      <NavLink to="/invoid"  className='link' >In Void</NavLink>
      <NavLink to="/bayc"  className='link'><img src ={Chimpanzee} className='icon'/>#BAYC</NavLink>
      
      
  </nav>
  </div>;
}

export default Navbar;
