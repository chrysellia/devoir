import React, { Component } from 'react';


class ProductList extends Component {
    constructor(props) {
        super(props);
        console.log("debuger props produits ", this.props.produits)
    }
    render() {
        return(
            <>
            <div>
                hello produit
                <h1 className="text-center titre pt-20 pb-0">Liste des produits</h1>
                <section>
                    { this.props.produits.map( product => {
                        return(
                            <div class="container px-5 py-24 mx-auto" key={product.id}>
                                <div class="flex flex-wrap -m-4">
                                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <a class="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product.image}/>
                                        </a>
                                        <div class="mt-4">
                                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{ product.categroy}</h3>
                                            <h2 class="text-gray-900 title-font text-lg font-medium">{ product.nom}</h2>
                                            <p class="mt-1">€ { product.prix}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
            </>
        )
    }
}

export default ProductList;