import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { exitBoard } from "../../routes/board/boardSlice";

function Header({ dropdownMenuOpen, setDropdownMenuOpen }) {
  const dispatch = useDispatch();

  const handleExitBoard = () => {
    dispatch(exitBoard());
  };

  const handleDropdownMenu = () => {
    if (!dropdownMenuOpen) {
      setDropdownMenuOpen(true);
    }
  };

  return (
    <div className="Header_Container">
      <Link to="/" className="GoToStart_Button" onClick={handleExitBoard}>
        <p>Cards Against Humanity.</p>
      </Link>
      <div className="Menu_Button" onClick={handleDropdownMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Header;
