import React, {useState} from "react";
import JsColor from './Jscolor'

import "./CustomSockPage.css";

function CustomSockPage() {

    const [state, setState] = useState({
        settings: {
            background_color: "#f4f"
          }
        
    });

   

    function changeColor(color) {
        const overlay = document.getElementById("product-shape");
        overlay.style.fill = color

        setState({ settings: { background_color: color } })
      }


  return (
    <div className="CustomSockPage" id="custom">
      <div className="pageContainer">

          <h1>Pick your colour</h1>
          
        <div className="containerImage">
            <svg id="product-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3400 2268"><path  id="product-shape" d="M1542,619.64s168.48,382.32,341.28,553S2298,1354,2298,1354s287.28,28.08,298.08,293.76c0,0-38.88,129.6-131.76,168.48s-252.72,153.36-684.72,71.28c0,0-162-15.12-170.64-6.48,0,0-136.08,17.28-272.16-185.76,0,0-95-151.2-110.16-203,0,0-177.12-298.08-319.68-455.76L1040.92,935l4.32-62.64,49.68-8.64,13-8.64,4.32-23.76,21.6,2.16-17.28-34.56,43.2,23.76-8.64-30.24,28.08-15.12,13,21.6L1215.88,773h19.44l-13-21.6,34.56-4.32-6.48-10.8,21.6-2.16-15.12-34.56,34.56,8.64,30.24-13,23.76-38.88,49.68-6.48,77.76-8.64,45.36-10.8Z"/></svg>
            <img id="background-image" src={ require("../../Assets/CustomisePage/Sock.png") } alt={"Stocking"} />
            <div className="colorContainer">
                <div className="selector">
                    <JsColor className="selectorInner" id="visitorsWidgetBackgroundColor" label="Choose a color" value={state.settings.background_color} onChange={(selected) => changeColor(selected)} />
                </div>
            </div>
           
        </div>



      </div>
    </div>
  );
}

export default CustomSockPage;
