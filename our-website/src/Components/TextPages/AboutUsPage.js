import React from 'react'

import './TextPage.css';

function AboutUsPage() {
    return (
        <div className="textPage" id="about">
             <div className="pageContainer" >
                <h1>About Laughing Socks</h1>
                <div className="aboutContainer">
                  <p className = "aboutItem"> Some filler text with Company Description that can be filled out later</p>
                  <img className = "aboutItem" src="#" width="250px" height="250px"></img>
                </div>

                <div className = "aboutContainer">
                  <img className = "aboutItem" href="#" height="250px" width="250px"></img>
                  <div className= "aboutItem">
                    <h1> Franklin </h1>
                    <p> Some filler text which is gonna be Franklin's Description</p>
                    </div>
                </div>

                <div className = "aboutContainer">
                  <div className= "aboutItem">
                    <h1> Jenna </h1>
                    <p> Some filler text which is gonna be Jenna's Description</p>
                  </div>
                  <img className = "aboutItem" href="#" height="250px" width="250px"></img>
                </div>

                <div className = "aboutContainer">
                  <img className = "aboutItem" href="#" height="250px" width="250px"></img>
                  <div className= "aboutItem">
                    <h1> Sam </h1>
                    <p> Some filler text which is gonna be Sam's Description</p>
                  </div>
                </div>
             </div>
        </div>
    )
}

export default AboutUsPage
