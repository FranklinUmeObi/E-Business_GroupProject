import React, { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./Catalogue.css";
import ProductCard from "./ProductCard";
import data from "../../Data/products.json";

function Catalogue(props) {

  
  const cards = data.Products.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
      quantity={product.quantity}
      catagory={product.catagory}
      setCart={props.setCart}
      cart={props.cart}
    />
  ));

  const [state, setState] = useState({
    cardsToShow: cards
  });


  function handleClick(event) {
    let filter = event.target.value;
    
    if (filter === "Traditional") {
      let list = [];
      for (let card of cards) {
        if (card.props.catagory === "Traditional") {
          list.push(card);
        }
      }
      setState({ ...state, cardsToShow: list });
    } else if (filter === "Fancy") {
      let list = [];
      for (let card of cards) {
        if (card.props.catagory === "Fancy") {
          list.push(card);
        }
      }
      setState({ ...state, cardsToShow: list });
    } else {
      setState({ ...state, cardsToShow: cards });
    }
  }

  function dynamicSearch() {
    let query = props.query.toLowerCase();
    let list = [];

    if (query === "") {
    } else {
      for (let card of state.cardsToShow) {
        let name = card.props.name.toLowerCase();

        if (name.includes(query)) {
          list.push(card);
        }
      }
      setState({ ...state, cardsToShow: list });
    }
  }

  return (
    <div
      className="catalogue"
      onMouseMove={dynamicSearch}
      onTouchMove={dynamicSearch}
    >
      <div className="text">
        <h3>Filter Catagory</h3>
      </div>

      <div className="filter">
        <button className="tab" value="" onClick={(e) => handleClick(e)}>
          All
        </button>
        <button
          className="tab"
          value="Traditional"
          onClick={(e) => handleClick(e)}
        >
          Traditional
        </button>
        <button className="tab" value="Fancy" onClick={(e) => handleClick(e)}>
          Fancy
        </button>
      </div>
      <div className="psa">
        <h5>Use tabs to reset an old search</h5>
      </div>

      <SRLWrapper>
        <div className="cards">{state.cardsToShow}</div>
      </SRLWrapper>
    </div>
  );
}

export default Catalogue;
