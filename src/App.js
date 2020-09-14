import React, { Component } from 'react';
import './App.style.scss'; 
//import ListProduct from './component/ListProduct';
// import Addition from './component/Addition';
import Gallery from './component/Gallery/Gallery';
import ProductList from './component/Product/ProductList';
// import DetailProduct from './component/DetailProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from "react-router-dom";
import Home from './HomePage/HomePage';

  class App extends Component {
    render(){
      const produits = [
        {
          'id': '1',
          'image':'image',
          'category':'my category',
          'nom': 'cryselian',
          'prix':'200'
        }
      ]
      return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallerie">
              <Gallery/>
            </Route>
            <Route exact path="/product" component={ProductList}>
              <ProductList produits={produits}/>
            </Route>
          </Switch>
        </Router>
        //   {/* <ListProduct nom="tsiky nacks au boeuf" description="croquette de pomme de terre à la saveur de boeuf" prix="200Ar" categorie="snack"/> */}
      )
    }
  }
export default App;
