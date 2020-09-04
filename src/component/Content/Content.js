import React,{ Component } from 'react';
import MiddleBody from '../MiddleBody/MiddleBody';
import './Content.styles.scss';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class Content extends Component {
    render() {
        return(
            <section class="text-gray-700 body-font">
                <div className="flex flex-no-wrap overflow-hidden items-center relative" style={{height: '670px'}}>
                  <Fade  left>
                    <img className="w-1/3 flex-none p-2 h-1/2" src="image/photo6.jpg"/>
                    <img className="w-1/3 flex-none p-2 h-1/2" src="image/photo5.jpg"/>
                    <img className="w-1/3 flex-none p-2 h-1/2" src="image/fashion.jpeg"/>
                  </Fade >
                  <Slide center>
                    <h1 className="cover_title text-center">La magie de la mode au rendez-vous!</h1>
                  </Slide>
                </div>
            <div class="container px-5 py-24 mx-auto">
              <Slide top>
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="titre sm:text-3xl text-2xl text-center font-medium mb-4 text-pink-900">Bienvenue chez Dream Clothes</h1>
                    <p class="content lg:w-2/3 mx-auto leading-relaxed">S'habiller comme une star, Dream Clothes vous en donne le pouvoir! Achetez les vêtements de vos rêves chez nous pour ravager tout sur votre passage. Une fois que vous portez l'habit de votre choix, plus rien ne peut vous arrêter.</p>
                </div>
              </Slide>
              <Slide left>
                <MiddleBody />
              </Slide>
              <h1 className="titre text-center text-pink-800 pb-10">NOS PRODUITS</h1>
                <div class="product_container flex flex-wrap -m-4">
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="product_image object-cover object-center w-full h-full block" src="image/dress.jpg"/>
                    </a>
                    <div class="mt-4">
                      <h3 class="text-black tracking-widest title-font mb-1">DRESS</h3>
                      <p class="price text-pink-800 mt-1">$16.00</p>
                    </div>
                  </div>
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="product_image object-cover object-center w-full h-full block" src="image/pants.jpg"/>
                    </a>
                    <div class="mt-4">
                      <h3 class="text-black tracking-widest title-font mb-1">PANTS</h3>
                      <p class="price text-pink-800 mt-1">$21.15</p>
                    </div>
                  </div>
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="product_image object-cover object-center w-full h-full block" src="image/skirt.jpg"/>
                    </a>
                    <div class="mt-4">
                      <h3 class="text-black tracking-widest title-font mb-1">SKIRT</h3>
                      <p class="price text-pink-800 mt-1">$12.00</p>
                    </div>
                  </div>
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="product_image object-cover object-center w-full h-full block" src="image/shirt.jpg"/>
                    </a>
                    <div class="mt-4">
                      <h3 class="text-black tracking-widest title-font mb-1">SHIRT</h3>
                      <p class="price text-pink-800 mt-1">$18.40</p>
                    </div>
                  </div>
                </div>
            </div>
          </section>
        )
    }
}

export default Content;