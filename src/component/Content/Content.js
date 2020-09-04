import React,{ Component } from 'react';
import MiddleBody from '../MiddleBody/MiddleBody';
import './Content.styles.scss';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class Content extends Component {
    render() {
        return(
          <>
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
              <h1 className="text-center titre tex-pink-800">NOS PRODUITS</h1>
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap md:-m-2 -m-1">
                  <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-1/2 relative">
                      <img alt="gallery" class="product_image w-full object-cover h-full object-center block" src="image/dress-female.jpg"/>
                      <h1 className="category_product text-center">ROBE</h1>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 relative">
                      <img alt="gallery" class="product_image w-full object-cover h-full object-center block" src="image/short-female.jpg"/>
                      <h1 className="category_product text-center">SHORT</h1>
                    </div>
                    <div class="md:p-2 p-1 w-full relative">
                      <img alt="gallery" class="product_image w-full h-full object-cover object-center block" src="image/shirt-female.jpg"/>
                      <h1 className="category_product text-center">CHEMISE</h1>
                    </div>
                  </div>
                  <div class="flex flex-wrap w-1/2 relative">
                    <div class="md:p-2 p-1 w-full">
                      <img alt="gallery" class="product_image w-full h-full object-cover object-center block" src="image/skirt-female.jpg"/>
                      <h1 className="category_product text-center">JUPE</h1>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 relative">
                      <img alt="gallery" class="product_image w-full object-cover h-full object-center block" src="image/pants-female.webp"/>
                      <h1 className="category_product text-center">PANTS</h1>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 relative">
                      <img alt="gallery" class="product_image w-full object-cover h-full object-center block" src="image/blouson-female.jpg"/>
                      <h1 className="category_product text-center">BLOUSON</h1>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 relative">
                      <img alt="gallery" class="product_image w-full object-cover h-full object-center block" src="image/sac-female.jpg"/>
                      <h1 className="category_product text-center">SAC</h1>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 relative">
                      <img alt="gallery" class="product_image w-full object-cover h-full object-center block" src="image/crop.jpg"/>
                      <h1 className="category_product text-center">CROP</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
        )
    }
}

export default Content;