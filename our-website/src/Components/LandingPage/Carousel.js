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
                <div>
                    <img className="c_image" src={img1} alt="Slide1"/>
                    <Link to="/customise">
                        <button className="c_button">
                            <h4 >Customise Your Perfect Christmas Sock</h4>
                        </button>
                    </Link>
                </div>

                <div>
                    <img className="c_image" src={img2} alt="Slide2" />
                    <Link to="/product">
                        <button className="c_button">
                            <h4> Customise Your Perfect Christmas Sock</h4>
                        </button>
                    </Link>
                </div>
                <div>
                    <img className="c_image" src={img3} alt="Slide3" />
                    <Link to="/product">
                        <button className="c_button">
                            <h4 >Customise Your Perfect Christmas Sock</h4>
                        </button>
                    </Link>
                </div>
            </ReactCarousel>
    </div>
  );
}

export default Carousel;
