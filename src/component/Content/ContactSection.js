import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './ContactSection.styles.scss';

class ContactSection extends Component {
    render() {
        return(
            <Fade right>
                <section class="text-gray-700 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="titre sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-800">Contactez-nous</h1>
                            <p class="content lg:w-2/3 mx-auto leading-relaxed text-base">Vous avez des questions? Envoyez-nous les en complétant les information suivantes</p>
                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text"/>
                                </div>
                                <div class="p-2 w-1/2">
                                    <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email"/>
                                </div>
                                <div class="p-2 w-full">
                                    <textarea class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
                                </div>
                                <div class="p-2 w-full">
                                    <button class="bouton flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        )
    }
}

export default ContactSection;