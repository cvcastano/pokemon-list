import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.svg';

function Header() {
    return (

        <header>
            <div className="header">
                <h1 className="title">My Pokemon List</h1>
                <span className="tagline">because Pokemons are cool!</span>
            </div>
            <div className="header-stripe">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </header>
    )
}

export default Header;
