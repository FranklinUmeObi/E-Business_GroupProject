import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import "./ProductCard.css";



function ProductCard(props) {
  const [state, setState] = useState({
    likes: Math.floor(Math.random() * 100)
});
const [stateColour, setStateColour] = useState({
  heart: 'grey'
});

function addLike(){
  let newCount = state.likes + 1;
    setState({likes: newCount});
    setStateColour({heart: 'red'});
};


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

      <div className="recommendationContainer">
        <Popup trigger={
        <button className="cardAddCart" onClick={() => props.addItemToCart(props.name, props.price, props.image)}>
            <h2 className="cardIconText">Add</h2>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>}modal nested>
        {close => (
          <div className="popUp flip-diagonal-1-fwd">
          <h3>Good Choice! We think you would also like these options... </h3>

          <div className="review">
            <h3>Maggie Musk</h3>
            <p>Fairly deece I must say. Kiddos are only raving over em</p>
          </div>

          <button className="popButton" onClick={() => {close();}}>Close Reviews</button>
          </div>
        )}
        </Popup>
        </div>


      <div className="reviewsContainer">
        <Popup trigger={<button className="stock"> <h2 className="stockText ">Reviews</h2> </button>}modal nested>
          {close => (
            <div className="popUp flip-diagonal-1-fwd">
              <h2>{props.name}: Reviews</h2>

              <div className="likeContainer">
                <h4>Total likes: {state.likes}</h4>

                <IconButton color="secondary" aria-label="Like" onClick={addLike}>
                  <FavoriteIcon style={{ color: stateColour.heart }}/>
                </IconButton>
              </div>

              <div className="review">
                <h3>Maggie Musk</h3>
                <p>Fairly deece I must say. Kiddos are only raving over em</p>
              </div>
              <div className="review">
                <h3>Lil Piddle</h3>
                <p>Groovy Baby</p>
              </div>

                <button className="popButton" onClick={() => {close();}}>Close Reviews</button>

            </div>
          )}
        </Popup>
        </div>
        </div>
      </div>
    );
  }

  export default ProductCard;
