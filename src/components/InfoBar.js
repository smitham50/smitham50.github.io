import React from 'react';
import About from './About';
import Contact from './Contact';
import '../component-stylesheets/InfoBar.css';

const InfoBar = () => {
    return (
        <div className="infobar">
            <Contact />
            <About />
        </div>
    );
}

export default InfoBar;