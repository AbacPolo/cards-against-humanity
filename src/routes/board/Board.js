import React, { useEffect } from "react";
import "./Board.css";
import Playfield from "../../components/playfield/Playfield";
import Header from "../../components/header/Header";
import { loadAllCards, playCardsLoaded } from "./boardSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedDecks } from "../decks/decksSlice";

function Board() {
  const cardsAreLoaded = useSelector(playCardsLoaded);
  const listSelectedDecks = useSelector(getSelectedDecks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cardsAreLoaded) {
      dispatch(loadAllCards(listSelectedDecks));
    }
  }, [dispatch, cardsAreLoaded, listSelectedDecks]);

  return (
    <div className="Board_Container">
      <div className="Board_Wrapper">
        <Header />
        <Playfield />
      </div>
    </div>
  );
}

export default Board;
