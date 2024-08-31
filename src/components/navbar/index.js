import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='col-6 Navbar'>
      <ul className="Navbar-items">
        <li className="Navbar-item"><NavLink to='/' end>Home</NavLink></li>
        <li className="Navbar-item"><NavLink to='/about'>About</NavLink></li>
        <li className="Navbar-item"><NavLink to='/menu'end>Menu</NavLink></li>
        <li className="Navbar-item"><NavLink to='/booking'>Reservations</NavLink></li>
        <li className="Navbar-item"><NavLink to='/order-online'>Online Order</NavLink></li>
        <li className="Navbar-item"><NavLink to='/login'>Login</NavLink></li>
      </ul>
    </nav>
  );
}
