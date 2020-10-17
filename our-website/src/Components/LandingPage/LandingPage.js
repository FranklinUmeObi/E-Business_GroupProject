import React from 'react'
import Carousel from   './Carousel'
import Packs from      './Packs'
import Catalogue from   './Catalogue'
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
             <div className="pageContainer">
                 <h1 className="title">Customise your stocking today</h1>
                 <Carousel />
                 <h1 className="title">Our Packs</h1>
                 <Packs id="packs"/>         
                 <h1 className="title">Our Products</h1>
                <Catalogue/>
             </div>
        </div>
    )
}

export default LandingPage