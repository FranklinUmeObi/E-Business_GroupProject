import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./ProductCard.css";


function ProductCard(props) {




function addToCart() {
  let newPrice = parseFloat(props.cart.price)
  let thisPrice = parseFloat(props.price)
  let cartPrice = parseFloat(newPrice + thisPrice)

  console.log(newPrice);
  console.log(thisPrice);
  console.log(cartPrice);
  props.setCart({ price: cartPrice.toFixed(2)})
}

  return (
    <div className="card">

      <div className="cardImage">
        <img className="img" src={ require(`../../Assets/ProductImages/${props.image}`) } alt={props.name} />
        
      </div>

      <div className="cardText">
        <h3>{props.name}</h3>
        <div className="stock">
            <p className="stockText">{props.quantity} in stock</p>
        </div>
      </div>

      <div className="cardButtons">
          <div className="price">
             <h3>€{props.price}</h3>
             
          </div>

        <button className="cardAddCart " onClick={addToCart}>
            <h2 className="cardIconText">Add</h2>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
