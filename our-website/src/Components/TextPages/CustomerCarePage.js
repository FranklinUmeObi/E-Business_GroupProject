import React from 'react'

import './TextPage.css';

function CustomerCarePage() {
    return (
        <div className="textPage" id="customer">
             <div className="pageContainer" >
                <h1>Customer Care</h1>
                <br></br>
                <h3>Send us a message here or contact us by phone or email.</h3>
                <br></br>
                <textarea type = "text" className = "form-control" placeholder= "Send us a message..."></textarea>
                <button className= "btn menuButton messageSubmitButton" type = "submit">
                    <h4>Submit</h4>
                </button>

                <div className = "otherInformation">
                    <h3>Or you can contact us here:</h3>
                    <h4>Phone: +353 87 689 1013</h4>
                    <h4>Email: laughingsocks@gmail.com</h4>
                    
                    <h3>If you are returning a package, address it here:</h3>
                    <h4>32 Thomas St</h4>
                    <h4>Dublin 8</h4>
                    <h4>Co Dublin</h4>
                    <h4>D08 FVF5</h4>

                </div>
        

             </div>
        </div>
    )
}

export default CustomerCarePage
