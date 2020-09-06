import React,{ Component } from 'react';
import MiddleBody from '../MiddleBody/MiddleBody';
import './Content.styles.scss';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import ProductList from '../Product/ProductList';
import { Link } from 'react-router-dom';

class Content extends Component {
  state = {
     produits : [{
      titre:'CHEMISE',
      image: './image/shirt-female.jpg',
      products: [{
        nom: 'Chemisier en mousseline de soie florale',
        description: 'Chemisier femmes 2019 dames hauts en mousseline de soie florale Blouse pour haut pour femme hauts volants support papillon manches blusas creux',
        prix: 9.29,
        category: 'Chemisier femme',
        image: './image/shirt4.jpg',
        }, {
            nom: 'Long sleeve blue-white',
            description: 'Long sleeve blue-white loose Korean style V-neck shirt',
            prix: 8.75,
            category: 'Chemisier femme',
            image: './image/shirt2.jpg',
        },
        {
            nom: 'Summer butterfly Sleeve',
            description: 'Summer casual solid women Chiffon Shirt Female butterfly Sleeve Korean loose size women blouse top black s',
            prix: 67.043,
            category: 'Chemise femme',
            image: './image/shirt3.jpg',
        },
        {
            nom: 'Mode Hiver Coréen',
            description: 'Casual Work style (vest over white shirt)',
            prix: 12.00,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        } 
      ],
     },

      {titre:'ROBE',
      image: './image/dress-female.jpg',
      products: [{
        nom: 'Chemisier en mousseline de soie florale',
        description: 'Chemisier femmes 2019 dames hauts en mousseline de soie florale Blouse pour haut pour femme hauts volants support papillon manches blusas creux',
        prix: 9.29,
        category: 'Chemisier femme',
        image: './image/shirt1.jpg',
        }, {
            nom: 'Long sleeve blue-white',
            description: 'Long sleeve blue-white loose Korean style V-neck shirt',
            prix: 8.75,
            category: 'Chemisier femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Summer butterfly Sleeve',
            description: 'Summer casual solid women Chiffon Shirt Female butterfly Sleeve Korean loose size women blouse top black s',
            prix: 67.043,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Mode Hiver Coréen',
            description: 'Casual Work style (vest over white shirt)',
            prix: 12.00,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        } 
      ],
      },
      
      {
      titre:'JUPE',
      image: './image/skirt-female.jpg',
      products: [{
        nom: 'Chemisier en mousseline de soie florale',
        description: 'Chemisier femmes 2019 dames hauts en mousseline de soie florale Blouse pour haut pour femme hauts volants support papillon manches blusas creux',
        prix: 9.29,
        category: 'Chemisier femme',
        image: './image/shirt1.jpg',
        }, {
            nom: 'Long sleeve blue-white',
            description: 'Long sleeve blue-white loose Korean style V-neck shirt',
            prix: 8.75,
            category: 'Chemisier femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Summer butterfly Sleeve',
            description: 'Summer casual solid women Chiffon Shirt Female butterfly Sleeve Korean loose size women blouse top black s',
            prix: 67.043,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Mode Hiver Coréen',
            description: 'Casual Work style (vest over white shirt)',
            prix: 12.00,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        } 
      ],
      },
    
      {
      titre:'SHORT',
      image: './image/short-female.jpg',
      products: [{
        nom: 'Chemisier en mousseline de soie florale',
        description: 'Chemisier femmes 2019 dames hauts en mousseline de soie florale Blouse pour haut pour femme hauts volants support papillon manches blusas creux',
        prix: 9.29,
        category: 'Chemisier femme',
        image: './image/shirt1.jpg',
        }, {
            nom: 'Long sleeve blue-white',
            description: 'Long sleeve blue-white loose Korean style V-neck shirt',
            prix: 8.75,
            category: 'Chemisier femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Summer butterfly Sleeve',
            description: 'Summer casual solid women Chiffon Shirt Female butterfly Sleeve Korean loose size women blouse top black s',
            prix: 67.043,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Mode Hiver Coréen',
            description: 'Casual Work style (vest over white shirt)',
            prix: 12.00,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        } 
      ],
      },
      
      {titre:'BLOUSON',
      image: './image/blouson-female.jpg',
      products: [{
        nom: 'Chemisier en mousseline de soie florale',
        description: 'Chemisier femmes 2019 dames hauts en mousseline de soie florale Blouse pour haut pour femme hauts volants support papillon manches blusas creux',
        prix: 9.29,
        category: 'Chemisier femme',
        image: './image/shirt1.jpg',
        }, {
            nom: 'Long sleeve blue-white',
            description: 'Long sleeve blue-white loose Korean style V-neck shirt',
            prix: 8.75,
            category: 'Chemisier femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Summer butterfly Sleeve',
            description: 'Summer casual solid women Chiffon Shirt Female butterfly Sleeve Korean loose size women blouse top black s',
            prix: 67.043,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Mode Hiver Coréen',
            description: 'Casual Work style (vest over white shirt)',
            prix: 12.00,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        } 
      ],
      },
      
      {titre:'PANTS',
      image: './image/pants-female.webp',
      products: [{
        nom: 'Chemisier en mousseline de soie florale',
        description: 'Chemisier femmes 2019 dames hauts en mousseline de soie florale Blouse pour haut pour femme hauts volants support papillon manches blusas creux',
        prix: 9.29,
        category: 'Chemisier femme',
        image: './image/shirt1.jpg',
        }, {
            nom: 'Long sleeve blue-white',
            description: 'Long sleeve blue-white loose Korean style V-neck shirt',
            prix: 8.75,
            category: 'Chemisier femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Summer butterfly Sleeve',
            description: 'Summer casual solid women Chiffon Shirt Female butterfly Sleeve Korean loose size women blouse top black s',
            prix: 67.043,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        },
        {
            nom: 'Mode Hiver Coréen',
            description: 'Casual Work style (vest over white shirt)',
            prix: 12.00,
            category: 'Chemise femme',
            image: './image/shirt1.jpg',
        } 
      ],
      }
     ],

     selectedProduct: {},
     showDetail: false
  }

  showProduit = (produit) => {
    this.setState({
      selectedProduct: produit,
      showDetail: true
    })
  }

  hideProduit = () => {
        this.setState({
            showDetail: false
        }, () => {
            document.body.style.overflow = 'auto';
        })
    }


    render() {
      const { produits, selectedProduct, showDetail } = this.state;
        return(
          <>
            <section>
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
              <h1 className="titre sm:text-3xl text-2xl text-center font-medium mb-4 text-center text-pink-800">NOS PRODUITS</h1>
              <section className="product_container relative">
                  <div className="container py-8 md:py-10 lg:py-24 mx-auto">  
                      <div className="flex flex-wrap justify-center">
                          { produits.map((produit, key) => {
                              return (
                                  <div key={key} className="product-box w-full xl:w-1/3 md:w-1/3 px-4 md:px-1 py-2">
                                      <div onClick={() => this.showProduit(produit)} className="product-border bg-gray-100 relative" style={{height: '375px'}}>
                                          <img
                                              className="h-full w-full absolute w-full object-cover object-center"
                                              src={produit.image} alt="Cocktails de fruit" />
                                          <div className="w-full absolute flex bg-black items-center justify-center bottom-0 bg-opacity-25">
                                              {/* <NavLink to={produit.url}> */}
                                                  <h2 className="text-center product-title">
                                                      { String(produit.titre).charAt(0).toUpperCase() + String(produit.titre).slice(1).toLowerCase() }
                                                  </h2>
                                              {/* </NavLink> */}
                                          </div>
                                      </div>
                                  </div>
                              )
                          }) }
                      </div>
                  </div>
                </section>
            </div>
          </section>
          <div className="absolute">
              { showDetail ? (<ProductList 
                  selectedProduct={selectedProduct}
                  hideProduit={this.hideProduit}/>
                  ) :
              null}
          </div>
          </>
        )
    }
}

export default Content;