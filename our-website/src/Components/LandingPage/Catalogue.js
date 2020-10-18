import React, { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import "./Catalogue.css";
import ProductCard from "./ProductCard";
import data from "../../Data/products.json";

function Catalogue() {

  const cards = data.Products.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
      quantity={product.quantity}
      catagory={product.catagory}
    />
  ));

  const [state, setState] = useState({
    cardsToShow:cards
});


function handleClick(event, query) 
{
  if (query === "Traditional") 
  {
    let list = []
    for (let card of cards) 
    {
      if ((card.props.catagory === "Traditional")) 
      {
        list.push(card)
      }
    }
    setState({cardsToShow:list})
  } 
  else if (query === "Fancy") 
  {
    let list = []
    for (let card of cards) 
    {
      if ((card.props.catagory === "Fancy")) 
      {
        list.push(card)
      }
    }
    setState({cardsToShow:list})
  } 
  
  else {
      setState({cardsToShow:cards})
  }
}

  return (
    <div className="catalogue">
        <div className="text">
            <h3>Filter Catagory</h3>
        </div>
        
      <div className="filter">
          <button className="tab" onClick={e => handleClick(e, "")}>All</button>
          <button className="tab" onClick={e => handleClick(e, "Traditional")}>Traditional</button>
          <button className="tab" onClick={e => handleClick(e, "Fancy")}>Fancy</button>
      </div>

      <SRLWrapper>
        <div className="cards">{state.cardsToShow}</div>
      </SRLWrapper>
    </div>
  );
}

export default Catalogue;
