import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation_Container">
      <div className="Navigation_Wrapper">
        <h1 className="Nav_Title">Cards Against Humanity.</h1>
        <div className="Nav_Buttons_Container">
          <Link to={"/board"}>
            <div className="Nav_Button">
              <h2>Play</h2>
            </div>
          </Link>
          <Link>
            <div className="Nav_Button">
              <h2>Choose decks</h2>
            </div>
          </Link>
        </div>
        <div className="Nav_Info">
          <p>Personal Project edition</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
