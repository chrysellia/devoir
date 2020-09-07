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
  Link
}
from "react-router-dom";
import Home from './HomePage/HomePage';

  class App extends Component {
    render(){
      return(
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
  
          <hr />
          <Switch>
            <Route exact path="/">
              <Maison />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
        //   {/* <ListProduct nom="tsiky nacks au boeuf" description="croquette de pomme de terre à la saveur de boeuf" prix="200Ar" categorie="snack"/> */}
      )
    }
  }
export default App;

class Maison extends Component {
  render(){
    return(
      <div>Maison</div>
    );
  }
}

class About extends Component {
  render(){
    return(
      <div>About</div>
    );
  }
}
