import React, { useEffect, useRef } from "react";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { drawBlackCard, getSelectedWhiteCards, nextTurn } from "../../routes/board/boardSlice";

function DropdownMenu({ dropdownMenuOpen, setDropdownMenuOpen }) {
  const dispatch = useDispatch();
  const selectedWhiteCards = useSelector(getSelectedWhiteCards);

  const closeDropdownMenu = () => {
    //close dropdown menu if click on buttons
    setDropdownMenuOpen(false);
  };

  const returnToPlayfield = () => {
    if (selectedWhiteCards.length > 0) {
      dispatch(drawBlackCard());
      dispatch(nextTurn());
    }
    setDropdownMenuOpen(false);
  };

  const ref = useRef();
  useEffect(() => {
    //close dropdown menu if click outside menu
    const checkIfClickedOutside = (e) => {
      if (dropdownMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setDropdownMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropdownMenuOpen, setDropdownMenuOpen]);

  return (
    <div className="DropdownMenu_Container" ref={ref}>
      <div className="DropdownMenu_Wrapper">
        <Link
          to="/board/playfield"
          className="DropdownMenu_Button"
          onClick={returnToPlayfield}
        >
          <h4>
            <i className="fa-solid fa-clone"></i>Gameboard
          </h4>
        </Link>
        <Link
          to="/board/history"
          className="DropdownMenu_Button"
          onClick={closeDropdownMenu}
        >
          <h4>
            <i className="fa-solid fa-clock-rotate-left"></i>History
          </h4>
        </Link>
        <Link
          to="/board/about"
          className="DropdownMenu_Button"
          onClick={closeDropdownMenu}
        >
          <h4>
            <i className="fa-solid fa-circle-info"></i>About
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
