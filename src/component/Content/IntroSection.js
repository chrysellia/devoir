import React,{ Component } from 'react';
import Slide from 'react-reveal/Fade';

class IntroSection extends Component {
    render() {
        return(
            <Slide top>
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="titre sm:text-3xl text-2xl text-center font-medium mb-4 text-pink-900">Bienvenue chez Dream Clothes</h1>
                    <p class="content lg:w-2/3 mx-auto leading-relaxed">S'habiller comme une star, Dream Clothes vous en donne le pouvoir! Achetez les vêtements de vos rêves chez nous pour ravager tout sur votre passage. Une fois que vous portez l'habit de votre choix, plus rien ne peut vous arrêter.</p>
                </div>
            </Slide>
        )
    }
}

export default IntroSection;