import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./ProductCard.css";


function ProductCard(props) {

  return (
    <div className="card">

      <div className="cardImage">
        <img className="img" src={ require(`../../Assets/ProductImages/${props.image}`) } alt={props.name} />
        
      </div>

      <div className="cardText">
        <h2>{props.name}</h2>
        {/* <div className="stock">
            <p className="stockText">{props.quantity} in stock</p>
        </div> */}
      </div>

      <div className="cardButtons">
          <div className="price">
             <h3>€{props.price}</h3>
             
          </div>

        <button className="cardAddCart " onClick={() => props.addItemToCart(props.name, props.price, props.image)}>
            <h2 className="cardIconText">Add</h2>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
