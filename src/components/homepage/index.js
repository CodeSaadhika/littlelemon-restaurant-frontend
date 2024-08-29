// module imports
import React from "react";

// styles import
import './Home.css';

// component imports
import Hero from "../hero";
import Specials from "../highlights";
import CustomersSay from "../testimonials";
import Chicago from "../about";

export default function Home(props) {
    console.log(props);
    return(
        <main className="Home">
            <Hero />
            <Specials />
            <CustomersSay />
            <Chicago />
        </main>
    );
}
