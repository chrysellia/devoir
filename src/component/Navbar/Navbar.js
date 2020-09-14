import React, { Component } from 'react';
import './Navbar.styles.scss';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <header className="bg-black">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="navbar flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link to="/gallerie" className="menu mr-5 text-white hover:text-pink-500">Accueil</Link>
                        <Link to="/product" className="menu mr-5 text-white hover:text-pink-500">Gallerie</Link>
                        {/* <a className="menu mr-5 text-white hover:text-pink-500">Accueil</a>
                        <a className="menu mr-5 text-white hover:text-pink-500">Gallerie</a> */}
                    </nav>
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                        <span className="logo ml-10 text-xl">Dream Clothes</span>
                    </a>
                    <div className="navbar lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <a className="menu mr-5 text-white hover:text-pink-500">Nos produits</a>
                        <a className="menu text-white hover:text-pink-500">Contact</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;