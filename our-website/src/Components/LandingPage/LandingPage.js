import React from 'react'
import SimpleReactLightbox from "simple-react-lightbox";
import Carousel from   './Carousel'
import Packs from      './Packs'
import Catalogue from   './Catalogue'
import './LandingPage.css';

function LandingPage(props) {
    return (
        <div className="LandingPage" id="home">
             <div className="pageContainer" >
                 <h1 className="title" >Customise your stocking today</h1>
                 <Carousel />
                 <h1 className="title" id="packs">Our Packs</h1>
                 <Packs />         
                 <h1 className="title" id="products">Our Products</h1>
                 <SimpleReactLightbox>
                    <Catalogue query ={props.query}/>
                 </SimpleReactLightbox>
                
             </div>
        </div>
    )
}

export default LandingPage
