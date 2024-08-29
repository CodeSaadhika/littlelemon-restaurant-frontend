import React from 'react';

import './Navbar.css';

export default function NavBar() {
  return (
    <nav className="container Navbar">
      <div className="Navbar-logo">
        <a href="/"><img src="/images/logo.jpg" alt="Little Lemon" /></a>
      </div>
      <ul className="Navbar-items">
        <li className="Navbar-item"><a href="/">Home</a></li>
        <li className="Navbar-item"><a href="/">About</a></li>
        <li className="Navbar-item"><a href="/">Menu</a></li>
        <li className="Navbar-item"><a href="/">Reservations</a></li>
        <li className="Navbar-item"><a href="/">Online Order</a></li>
        <li className="Navbar-item"><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}
