import React, {useState} from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import Header from      './Components/Header/header'
import LandingPage from './Components/LandingPage/LandingPage'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'
import CustomSockPage from './Components/CustomSockPage/CustomSockPage'
import AboutUsPage from './Components/TextPages/AboutUsPage'
import ContactPage from './Components/TextPages/ContactPage'
import CustomerCarePage from './Components/TextPages/CustomerCarePage'

import './App.css';


function App() {

//----------------------------------------------------------------------
  //State
//----------------------------------------------------------------------
  const [search, setSearch] = useState({
    searchTerm: ""
});

const [cart, setCart] = useState({
  price : 0.00,
  cartItems : [ ]

});

//----------------------------------------------------------------------
  //Functions
//----------------------------------------------------------------------

function editSearchTerm(e)
  {
    setSearch({searchTerm : e.target.value})
  }

  function addItemToCart(itemName, itemPrice, itemImage)
  {
    let cartItem = {name : itemName, price : itemPrice, img : itemImage}
    let oldCartTotal = cart.price
    let newTotal = parseFloat(oldCartTotal) + parseFloat(itemPrice)
    setCart(prevState => ({
      price: newTotal.toFixed(2),
      cartItems: [...prevState.cartItems, cartItem]
    }))
  }




//----------------------------------------------------------------------
  //HTML To Render
//----------------------------------------------------------------------
  return (
    <Router>
      <div className="App">
        <Header setSearchState={editSearchTerm} searchVal={search.searchTerm} price={cart.price} />

        <Route exact={true} path="/" render={() => (<LandingPage query={search.searchTerm} addItemToCart={addItemToCart}  />)}/>

        <Route exact={true} path="/checkout" render={() => (<CheckoutPage cart={cart}   />)}/>
        <Route exact={true} path="/customise"   render={() => (<CustomSockPage addItemToCart={addItemToCart}   />)}/>

        <Route exact={true} path="/about-us" component={AboutUsPage}/>
        <Route exact={true} path="/contact-us" component={ContactPage}/>
        <Route exact={true} path="/customer-care" component={CustomerCarePage}/>

      </div>
    </Router>
  );
}

export default App;
