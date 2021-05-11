import React from 'react';
import { Link } from 'react-router-dom';
import '../component-stylesheets/NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <Link to='/about'>
                <p>{"About"}</p>
            </Link>
            <Link to='/skills'>
                <p>{"Skills"}</p>
            </Link>
            <Link to='/projects'>
                <p>{"Projects"}</p>
            </Link>
            <Link to='/learning'>
                <p>{"Learning"}</p>
            </Link>
        </nav>
    );
};

export default NavBar;

