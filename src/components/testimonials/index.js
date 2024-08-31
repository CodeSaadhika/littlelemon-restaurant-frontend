import React from "react";

import './Testimonials.css';

export default function CustomersSay({ testimonials }) {
    const testimonialsList = testimonials.testimonials.map(testimonial => <div className="col-3 CustomerSays-testimonial">
        <article className="CustomersSay-card">
            <div className="CustomersSay-rating">
                <span>Rating: </span>
                <span className="CustomersSay-rating-stars" data-rating={testimonial.rating}>
                    <img src="https://img.icons8.com/ios/16/star--v1.png" alt="Rating Star"/>
                    <img src="https://img.icons8.com/ios/16/star--v1.png" alt="Rating Star"/>
                    <img src="https://img.icons8.com/ios/16/star--v1.png" alt="Rating Star"/>
                    <img src="https://img.icons8.com/ios/16/star--v1.png" alt="Rating Star"/>
                    <img src="https://img.icons8.com/ios/16/star--v1.png" alt="Rating Star"/>
                </span>
            </div>
            <div className="row CustomersSay-testimonial">
                <div className="col-4 CustomersSay-image">
                    <img src={testimonial.image} alt={testimonial.name} className="img" />
                </div>
                <div className="col-8 CustomersSay-details">
                    <div className="CustomersSay-name">
                        <p><strong>{testimonial.name}</strong></p>
                    </div>
                    <div className="CustomersSay-review">
                        <p>{testimonial.review}</p>
                    </div>
                </div>
            </div>
        </article>
    </div>);
    return(<section className="CustomersSay">
        <div className="container">
            <div className="row">
                <div className="col-8 m-2">
                    <header className="row CustomersSay-header">
                        <h3 className="title">{testimonials.header.title}</h3>
                    </header>
                    <div className="row">{testimonialsList}</div>
                </div>
            </div>
        </div>
    </section>);
}