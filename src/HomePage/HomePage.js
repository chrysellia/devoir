import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../component/Navbar/Navbar';
import Content from '../component/Content/Content';
import Footer from '../component/Footer/Footer';
import Contact from '../component/Contact/Contact';

class HomePage extends Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>Dream Clothes</title>
                    <meta name="description" content="S'habiller comme une star, Dream Clothes vous en donne le pouvoir! Achetez les vêtements de vos rêves chez nous pour ravager tout sur votre passage. Une fois que vous portez l'habit de votre choix, plus rien ne peut vous arrêter." />
                    <meta name="keywords" content="S'habiller comme une star, Dream Clothes vous en donne le pouvoir! Achetez les vêtements de vos rêves chez nous pour ravager tout sur votre passage. Une fois que vous portez l'habit de votre choix, plus rien ne peut vous arrêter." />
                </Helmet>

                <Navbar />
                <Content />
                <Contact />
                <Footer />
            </>
        )
    }
}

export default HomePage;