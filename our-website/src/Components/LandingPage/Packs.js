import React from "react";
import { Link } from "react-router-dom";

import "./Packs.css";

function Packs() {
  return (
    <div className="packsContainer">
      <Link to="/family">
        <div className="pack fam">
          <h2 className="packText">Family Pack</h2>
        </div>
      </Link>

      <Link to="/work">
        <div className="pack corp">
          <h2 className="packText">Corporate Pack</h2>
        </div>
      </Link>
    </div>
  );
}

export default Packs;
