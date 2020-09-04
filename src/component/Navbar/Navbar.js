import React, { Component } from 'react';
import './Navbar.styles.scss'; 

class Navbar extends Component {
    render() {
        return(
            <header class="bg-black">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav class="navbar flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <a class="menu mr-5 text-white hover:text-pink-500">Accueil</a>
                        <a class="menu mr-5 text-white hover:text-pink-500">Gallerie</a>
                    </nav>
                    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                        <span class="logo ml-10 text-xl">Dream Clothes</span>
                    </a>
                    <div class="navbar lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <a class="menu mr-5 text-white hover:text-pink-500">Nos produits</a>
                        <a class="menu text-white hover:text-pink-500">Contact</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;