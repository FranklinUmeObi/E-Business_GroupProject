import React, {useState} from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import Header from      './Components/Header/header'
import LandingPage from './Components/LandingPage/LandingPage'
import ProductPage from './Components/ProductPage/ProductPage'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'

import data from './Data/products.json'

import './App.css';


function App() {

  const [search, setSearch] = useState({
    searchTerm: ""
});

function editSearchTerm(e)
  {
    setSearch({searchTerm : e.target.value})
  }

  return (
    <Router>
      <div className="App">
        <Header setSearchState={editSearchTerm} searchVal={search.searchTerm}/>

        <Route exact={true} path="/" render={() => (<LandingPage query={search.searchTerm}/>)}/>
        <Route exact={true} path="/checkout" component={CheckoutPage}/>
        <Route exact={true} path="/product" render={() => (
          <ProductPage name={data.Products[1].name}/>//This is just an example of how to pass data as a parameter
        )}/>

      </div>
    </Router>
  );
}

export default App;
