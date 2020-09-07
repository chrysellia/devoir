import React,{ Component } from 'react';

class ProductSection extends Component {
    state = {
        produits : [{
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
           }],
         }],

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
                <h1 className="titre sm:text-3xl text-2xl text-center font-medium mb-4 text-center text-pink-800">LES PRODUITS DISPONIBLES</h1>
                <section className="product_container relative">
                    <div className="container py-8 md:py-10 lg:py-24 mx-auto">  
                        <div className="flex flex-wrap justify-center">
                            { produits.map((produit, key) => {
                                return(
                                    <div key={key} className="product-box w-full xl:w-1/3 md:w-1/3 px-4 md:px-1 py-2">
                                        <div onClick={() => this.showProduit(produit)} className="product-border bg-gray-100 relative" style={{height: '375px'}}>
                                            <img
                                                className="h-full w-full absolute w-full object-cover object-center"
                                                src={produit.image} alt="Cocktails de fruit" />
                                            <div className="w-full absolute flex bg-black items-center justify-center bottom-0 bg-opacity-25">
                                                <h2 className="text-center product-title">
                                                    { String(produit.titre).charAt(0).toUpperCase() + String(produit.titre).slice(1).toLowerCase() }
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                {/* <div className="absolute">
              { showDetail ? (<ProductList 
                  selectedProduct={selectedProduct}
                  hideProduit={this.hideProduit}/>
                  ) :
              null}
          </div> */}
            </>
        )
    }

}

export default ProductSection;