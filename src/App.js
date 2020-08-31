import React, { Component } from 'react';
import './App.style.scss'; 
//import ListProduct from './component/ListProduct';
import Addition from './component/Addition';
// import Navbar from './component/Navbar';
// import Content from './component/Content';
// import Footer from './component/Footer';

  class App extends Component {
    render(){
      return(
        <div className="App">
          {/* <Navbar />
          <Content />
          <Footer /> */}
          {/* <ListProduct nom="tsiky nacks au boeuf" description="croquette de pomme de terre à la saveur de boeuf" prix="200Ar" categorie="snack"/> */}
          <Addition/>
        </div>
      )
    }
  }
export default App;
