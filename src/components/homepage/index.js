// module imports
import React from "react";

// styles import
import './Homepage.css';

// component imports
import Hero from "../hero";
import Specials from "../highlights";
import CustomersSay from "../testimonials";
import Chicago from "../about";

export default function Homepage({ home, dishes }) {
    return (
        <main className="Homepage">
            <Hero />
            <Specials specials={home.specials} dishes={dishes} />
            <CustomersSay testimonials={home.testimonials} />
            <Chicago />
        </main>
    );
}
