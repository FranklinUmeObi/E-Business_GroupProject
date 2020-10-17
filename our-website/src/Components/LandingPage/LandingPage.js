import React from 'react'
import Carousel from      './Carousel'
import Packs from      './Packs'
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="LandingPage">
             <div className="pageContainer">
                 <h1 className="title">Customise your stocking today</h1>
                 <Carousel/>
                 <h1 className="title">Our Packs</h1>
                 <Packs/>         
                 <h2>H</h2>
                 <h2>H</h2>
                 <h2>H</h2>
                 <h2>H</h2>
                 <h2>H</h2>
             </div>
        </div>
    )
}

export default LandingPage
