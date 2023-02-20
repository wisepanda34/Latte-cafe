import React from 'react';
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import About from "./About/About";
import Schedule from "./Schedule/Schedule";
import Gallery from "./Gallery/Gallery";
import Award from "./Award/Award";

const Main = () => {
    return (
        <main>
            <Home/>
            <About/>
            <Menu/>
            <Schedule/>
            <Gallery/>
            <Award/>

        </main>
    );
};

export default Main;