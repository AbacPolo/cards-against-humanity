import React, { useEffect, useRef } from "react";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";

function DropdownMenu({ dropdownMenuOpen, setDropdownMenuOpen }) {
  const closeDropdownMenu = () => {
    setDropdownMenuOpen(false);
  };

  const ref = useRef();

  useEffect(() => {
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
        <Link className="DropdownMenu_Button" onClick={closeDropdownMenu}>
          <h4>
            <i className="fa-solid fa-clock-rotate-left"></i>History
          </h4>
        </Link>
        <Link className="DropdownMenu_Button" onClick={closeDropdownMenu}>
          <h4>
            <i className="fa-solid fa-circle-info"></i>About
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
