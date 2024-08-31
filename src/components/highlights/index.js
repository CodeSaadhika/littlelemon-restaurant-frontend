import React from "react";
import { NavLink } from "react-router-dom";

import './Highlights.css';

import DishCard from '../card';

export default function Specials({ specials, dishes }) {
    const dishCards = dishes.map(dish => <div class="col-4">
        <DishCard image={dish.image} name={dish.name} price={dish.price} description={dish.description} id={dish.id} />
    </div>);
    return (<section className="Specials">
        <div className="container">
            <div className="row">
                <div className="col-8 m-2">
                    <header className="row Specials-header">
                        <h3>{specials.header.text}</h3>
                        <div className="col-">
                            <NavLink to="/order-online" className="button button--primary">{specials.header.ctaLabel}</NavLink>
                        </div>
                    </header>
                    <section className="row Specials-content">{dishCards}</section>
                </div>
            </div>
        </div>
    </section>);
}