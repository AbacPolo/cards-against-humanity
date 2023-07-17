import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { drawBlackCard, nextTurn } from "../../routes/board/boardSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const startNextTurn = () => {
    dispatch(drawBlackCard());
    dispatch(nextTurn());
  };

  return (
    <div className="Header_Container">
      <Link to="/" className="Menu_Button">
        <i className="fa-regular fa-clone"></i>
      </Link>
      <button className="NextTurn_Button" onClick={startNextTurn}>
        {/* <p>Next turn</p> */}
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Header;
