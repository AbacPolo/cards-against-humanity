import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header_Container">
      <Link to="/" className="GoToStart_Button">
        <p>Cards Against Humanity.</p>
      </Link>
      <div className="Menu_Button">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Header;
