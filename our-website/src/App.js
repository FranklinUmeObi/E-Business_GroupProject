import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from      './Components/Header/header'
import LandingPage from './Components/LandingPage/LandingPage'
import ProductPage from './Components/ProductPage/ProductPage'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'

import data from './Data/products.json'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path="/checkout" component={CheckoutPage}/>
        <Route exact={true} path="/product" render={() => (
          <ProductPage name={data.Products[1].name}/>//This is just an example of how to pass data as a parameter
        )}/>

      </div>
    </Router>
  );
}

export default App;
