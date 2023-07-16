import React from "react";
import "./Decks.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedDeck,
  getAllDecks,
  getSelectedDecks,
  removeAllDecks,
  removeSelectedDeck,
  selectAllDecks,
} from "./decksSlice";
import { Link } from "react-router-dom";

function Decks() {
  const listAllDecks = useSelector(getAllDecks);
  const listSelectedDecks = useSelector(getSelectedDecks);
  const dispatch = useDispatch();

  const handleSelectDeck = ({ target }) => {
    const { checked, id } = target;
    if (checked && !listSelectedDecks.hasOwnProperty(id)) {
      dispatch(addSelectedDeck(id));
    } else if (!checked && listSelectedDecks.hasOwnProperty(id)) {
      dispatch(removeSelectedDeck(id));
    }
    document.getElementsByClassName("SelectNone_Checkbox")[0].checked = false;
  };

  const handleSelectAll = ({ target }) => {
    const { checked } = target;
    if (checked) {
      dispatch(selectAllDecks());
      const checkElements = document.getElementsByClassName("Checkbox");
      for (let element of checkElements) {
        element.checked = true;
      }
      document.getElementsByClassName("SelectNone_Checkbox")[0].checked = false;
    } else {
      document.getElementsByClassName("SelectAll_Checkbox")[0].checked = true;
    }
  };

  const handleRemoveAll = ({ target }) => {
    const { checked } = target;
    if (checked) {
      dispatch(removeAllDecks());
      const uncheckElements = document.getElementsByClassName("Checkbox");
      for (let element of uncheckElements) {
        element.checked = false;
      }
      document.getElementsByClassName("SelectAll_Checkbox")[0].checked = false;
    } else {
      document.getElementsByClassName("SelectNone_Checkbox")[0].checked = true;
    }
  };

  return (
    <div className="Decks_Container">
      <div className="Decks_Wrapper">
        <div className="Default_CheckBoxs">
          <div className="CheckBox_Container">
            <input
              className="SelectAll_Checkbox"
              type="checkbox"
              id="SelectAll"
              name="SelectAll"
              onChange={handleSelectAll}
              defaultChecked
            />
            <label htmlFor="SelectAll">Select All</label>
          </div>
          <div className="CheckBox_Container">
            <input
              className="SelectNone_Checkbox"
              type="checkbox"
              id="SelectNone"
              name="SelectNone"
              onChange={handleRemoveAll}
            />
            <label htmlFor="SelectNone">Select None</label>
          </div>
        </div>
        {Object.keys(listAllDecks).map((key) => (
          <div key={key} className="CheckBox_Container">
            <input
              className="Checkbox"
              type="checkbox"
              id={key}
              name={key}
              onChange={handleSelectDeck}
              defaultChecked
            />
            <label className="Label" htmlFor={key}>
              {key}
            </label>
          </div>
        ))}
        <Link to={"/"}>
          <div className="backButton">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Decks;
