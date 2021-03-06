import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from 'react-router-hash-link';
import "./Menu.css";

function Menu(props) {
  function handleClosePress() {
    props.setState({ show: 0 });
  }

  if (props.show === 1) {
    return (
      <div className="menu">
        <div className="padding" />

        <div className="menuContainer">
          <div className="closeContainer">
            <button className="btn menuButton" onClick={handleClosePress}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <Link to="/#home">
            <button className="btn menuItem">
              <h3 className="menuItemText">Home</h3>
            </button>
          </Link>

          <Link to="/customise">
            <button className="btn menuItem">
              <h3 className="menuItemText">Customise</h3>
            </button>
          </Link>

          <Link to="/#packs">
            <button className="btn menuItem">
              <h3 className="menuItemText">Packs</h3>
            </button>
          </Link>
          <Link to="/#products">
            <button className="btn menuItem">
              <h3 className="menuItemText">Products</h3>
            </button>
          </Link>


          <Link to="/about-us">
            <button className="btn menuItem">
              <h3 className="menuItemText">About Us</h3>
            </button>
          </Link>

          <Link to="/customer-care">
            <button className="btn menuItem">
              <h3 className="menuItemText">Customer Care</h3>
            </button>
          </Link>

          <br/>
        </div>
      </div>
    );
  } else return <div></div>;
}

export default Menu;
