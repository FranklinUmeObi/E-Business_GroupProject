import React from 'react'
import logo from "../../Assets/Logo/logo.png";

import './TextPage.css';

function AboutUsPage() {
    return (
        <div className="textPage" id="about">
             <div className="pageContainer" >
                <h1>About Laughing Socks</h1>
                <div className="aboutContainer">
                  <p className = "aboutItem"> Laughing Socks was founded amid the COVID-19 pandemic.
                  We aim to provide an online marketplace for Christmas stockings, since some shoppers
                  may be understandably concerned about visiting shops in the current climate.
                  All our stockings are developed as per customer orders, guaranteeing the highest of quality.</p>
                  <img className = "aboutItem" src={logo} alt="Logo" width="500px" height="150px"></img>
                </div>

                <h1>About Our Founders</h1>
                <div className = "aboutContainer">
                  <img className = "aboutItem" src={ require(`./AboutUsImages/Franklin.jpg`) } height="250px" width="250px"></img>
                  <div className= "aboutItem">
                    <h2> Franklin </h2>
                    <ul>
                      <li>Name: Franklin Ume Obiekwe</li>
                      <li>Hometown: Longford, Ireland</li>
                      <li>Favourite Sport: American Football</li>
                      <li>Favourite Stocking: Neon Snowflakes</li>
                      <li>Decorating Skill: Able to reach high spots without need of a ladder</li>
                    </ul>
                  </div>
                </div>

                <div className = "aboutContainer">
                  <div className= "aboutItem">
                    <h2> Jenna </h2>
                    <ul>
                      <li>Name: Jenna Lake</li>
                      <li>Hometown: Boston, USA</li>
                      <li>Favourite Sport: Figure Skating</li>
                      <li>Favourite Stocking: Snowie</li>
                      <li>Decorating Skill: Able to reach low spots without bending down and causing back issues</li>
                    </ul>
                  </div>
                  <img className = "aboutItem" src={ require(`./AboutUsImages/Jenna.png`) } height="250px" width="250px"></img>
                </div>

                <div className = "aboutContainer">
                  <img className = "aboutItem" src={ require(`./AboutUsImages/Sam.jpg`) } height="250px" width="250px"></img>
                  <div className= "aboutItem">
                    <h2> Sam </h2>
                    <ul>
                      <li>Name: Sam Walsh</li>
                      <li>Hometown: Dublin, Ireland</li>
                      <li>Favourite Sport: Basketball</li>
                      <li>Favourite Stocking: Nigel</li>
                      <li>Decorating Skill: Being able to reach those just right spots</li>
                    </ul>
                  </div>
                </div>
             </div>
        </div>
    )
}

export default AboutUsPage
