import React, {useState} from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import Header from      './Components/Header/header'
import LandingPage from './Components/LandingPage/LandingPage'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage'
import CustomSockPage from './Components/CustomSockPage/CustomSockPage'
import AboutUsPage from './Components/TextPages/AboutUsPage'
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


  //This doesn't update price correctly if there was no re-render
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


  function removeItemFromCart(itemName, itemPrice)
  {
    let items = cart.cartItems
    let updatedCart = []
    let found = false
    for (let i = 0; i < items.length; i++) 
    {
      const item = items[i];
      if(item.name === itemName && found !== true)
      {
        found = true
      }
      else{
        updatedCart.push(item)
      }
    }

    let updatedPrice = cart.price - itemPrice
    updatedPrice = updatedPrice.toFixed(2)
    setCart(prevState => ({
      price: updatedPrice,
      cartItems: updatedCart
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

        <Route exact={true} path="/checkout" render={() => (<CheckoutPage cart={cart} removeItemFromCart={removeItemFromCart}  />)}/>
        <Route exact={true} path="/customise"   render={() => (<CustomSockPage addItemToCart={addItemToCart}   />)}/>

        <Route exact={true} path="/about-us" component={AboutUsPage}/>
        <Route exact={true} path="/customer-care" component={CustomerCarePage}/>

      </div>
    </Router>
  );
}

export default App;
