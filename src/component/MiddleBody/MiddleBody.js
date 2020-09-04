import React, { Component } from 'react';


class MiddleBody extends Component {
    render() {
        return(
            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="image object-cover object-center" alt="hero" src="image/photo4.jpg"/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="titre title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-800">Commandez en ligne dès maintenant!
                            {/* <br class="hidden lg:inline-block">readymade gluten</br> */}
                        </h1>
                        <p class="content mb-8 leading-relaxed">Notre service vous offre multiples choix quelque soit la saison. Dans le cas où votre commande est déteriorée, nous vous offrons une assurance pour vour rembourser</p>
                        <div class="flex justify-center">
                            <button class="bouton inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none rounded text-lg">Voir produit</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MiddleBody;