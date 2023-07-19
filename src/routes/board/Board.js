import React, { useEffect, useState } from "react";
import "./Board.css";
import Header from "../../components/header/Header";
import { loadAllCards, playCardsLoaded } from "./boardSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedDecks } from "../decks/decksSlice";
import { Outlet } from "react-router";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";

function Board() {
  const cardsAreLoaded = useSelector(playCardsLoaded);
  const listSelectedDecks = useSelector(getSelectedDecks);
  const dispatch = useDispatch();
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  useEffect(() => {
    if (!cardsAreLoaded) {
      dispatch(loadAllCards(listSelectedDecks));
    }
  }, [dispatch, cardsAreLoaded, listSelectedDecks]);

  return (
    <div className="Board_Container">
      <div className="Board_Wrapper">
        <Header
          dropdownMenuOpen={dropdownMenuOpen}
          setDropdownMenuOpen={setDropdownMenuOpen}
        />
        <Outlet />
        {dropdownMenuOpen ? (
          <DropdownMenu
            dropdownMenuOpen={dropdownMenuOpen}
            setDropdownMenuOpen={setDropdownMenuOpen}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Board;
