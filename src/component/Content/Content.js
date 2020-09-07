import React,{ Component } from 'react';
import SliderSection from './SliderSection';
import IntroSection from './IntroSection';
import FavoriteSection from './FavoriteSection';
import ProductSection from './ProductSection';
import ContactSection from './ContactSection';
import MiddleBody from '../MiddleBody/MiddleBody';
import './Content.styles.scss';
import ProductList from '../Product/ProductList';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Fade';

class Content extends Component {
    render() {
        return(
          <>
            <section>
            <SliderSection />
            <div class="container px-5 py-24 mx-auto">
              <IntroSection />
              <Slide left>
                <MiddleBody />
              </Slide>
              <FavoriteSection/>
              <ProductSection/>
              <ContactSection />
            </div>
          </section>
          </>
        )
    }
}

export default Content;