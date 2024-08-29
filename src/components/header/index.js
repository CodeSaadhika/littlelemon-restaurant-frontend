import React from "react";

import './Header.css';

import Navbar from "../navbar";

export default function Header(props) {
  return (<header className="container Header">
    <div className="Header-logo">
      <a href="/"><img src="/images/logo.jpg" alt="Little Lemon" /></a>
    </div>
    <Navbar />
  </header>);
}
