import React from "react";

import './Header.css';

import Navbar from "../navbar";

export default function Header(props) {
  return (<header className="container Header">
    <div class="row" >
        <div className="row">
            <div className="col-8 m-2">
                <div className="row">
                    <div className="col-4 Header-logo">
                        <a href="/"><img src="/images/logo.jpg" alt="Little Lemon" /></a>
                    </div>
                    <Navbar />
                </div>
            </div>
        </div>
    </div>
  </header >);
}
