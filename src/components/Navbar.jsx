import React from 'react';
import './css/navbar.css';

function Navbar() {
  return (
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="contact">Contact</a></li>
      <li style={{ float: 'right' }}><a href="About" className='active'>About Us</a></li>
    </ul>
  );
}

export default Navbar;
