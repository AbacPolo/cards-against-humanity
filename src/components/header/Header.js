import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header_Container">
      <Link to="/" className="Menu_Button">
        <i className="fa-regular fa-clone"></i>
      </Link>
    </div>
  );
}

export default Header;
