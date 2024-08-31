import React from "react";
import { NavLink } from "react-router-dom";

import './Card.css';

export default function DishCard({image, name, price, description, id}) {
    const dishURL = `/menu/${id}`;
    return(<article className="row flex-column DishCard">
        <div className="DishCard-image"><img src={image} alt={name} className="img" /></div>
        <div className="row DishCard-details">
            <div className="row flex-column">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 DishCard-name"><h3>{name}</h3></div>
                        <div className="col-2 DishCard-price">${price}</div>
                    </div>
                </div>
                <div className="col-12 DishCard-description">
                    <p>{description}</p>
                </div>
                <div className="col-12 DishCard-cta"><NavLink to={dishURL}>View Details</NavLink></div>
            </div>
        </div>
    </article>);
}