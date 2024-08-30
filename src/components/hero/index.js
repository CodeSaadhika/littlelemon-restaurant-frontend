import React from "react";
import { NavLink } from "react-router-dom";

import './Herobanner.css';

export default function Herobanner(props) {
    return(<section className="Herobanner">
        <div className="container">
            <div className="row Herobanner-content">
                <div className="col-5 row flex-column Herobanner-text">
                    <div className="row flex-column">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>In voluptate nulla qui ullamco ad laborum minim elit non laborum cupidatat occaecat amet. Veniam nisi nostrud non Lorem in ea. Laboris labore cupidatat incididunt ut commodo proident cillum id elit esse est.</p>
                    </div>
                    <div className="col-6">
                        <NavLink to='/booking' className="button button--regular Herobanner-cta">Reserve a Table</NavLink>
                    </div>
                </div>
                <div className="col-3 Herobanner-image">
                    <img className="img" src="/images/sandwich.jpg" alt="Sandwich" />
                </div>
            </div>
        </div>
    </section>);
}