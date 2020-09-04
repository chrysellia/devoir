import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        
        return(
            <>
            <div>
                <h1 className="text-center titre pt-20 pb-0">Liste des produits</h1>
                <section>
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="image/shirt4.jpg"/>
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Chemisier femme</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Chemisier en mousseline de soie florale</h2>
                                <p class="mt-1">€ 9,29</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="image/shirt2.jpg"/>
                            </a>
                            <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Chemisier femme</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Long sleeve blue-white</h2>
                            <p class="mt-1">$8.75</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="image/shirt3.jpg"/>
                            </a>
                            <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Chemisier femme</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Summer butterfly Sleeve</h2>
                            <p class="mt-1">$67,043</p>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="image/shirt1.jpg"/>
                            </a>
                            <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Chemisier femme</h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">Mode Hiver Coréen</h2>
                            <p class="mt-1">$12.00</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
            </div>
            </>
        )
    }
}

export default ProductList;