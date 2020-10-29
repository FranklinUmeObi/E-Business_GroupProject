import React from "react";
import { Link } from "react-router-dom";
import { Carousel as ReactCarousel  } from 'react-responsive-carousel';
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assets/Carousel/1.png";
import img2 from "../../Assets/Carousel/2.png";
import img3 from "../../Assets/Carousel/3.png";

function Carousel() {
  return (
    <div className="carouselContainer">
         <ReactCarousel className="slider" showThumbs={false} showStatus={false} showArrows={true} autoPlay infiniteLoop>
         <Link to="/customise">
                <div>
                    <img className="c_image" src={img1} alt="Slide1"/>                
                </div>
        </Link>
        <Link to="/customise">
                <div>
                    <img className="c_image" src={img2} alt="Slide2"/>                
                </div>
        </Link>
        <Link to="/customise">
                <div>
                    <img className="c_image" src={img3} alt="Slide3"/>                
                </div>
        </Link>
            </ReactCarousel>
    </div>
  );
}

export default Carousel;
