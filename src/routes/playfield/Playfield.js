import React, { useEffect } from "react";
import "./Playfield.css";
import { useDispatch, useSelector } from "react-redux";
import {
  playCardsLoaded,
  getActiveBlackCards,
  getActiveWhiteCards,
  drawBlackCard,
  drawWhiteCard,
  getSelectedWhiteCards,
  nextTurn,
} from "../board/boardSlice";
import BlackCard from "../../components/blackCard/BlackCard";
import WhiteCard from "../../components/whiteCard/WhiteCard";

function Playfield() {
  const dispatch = useDispatch();
  const cardsLoaded = useSelector(playCardsLoaded);
  const activeBlackCards = useSelector(getActiveBlackCards);
  const activeWhiteCards = useSelector(getActiveWhiteCards);
  const selectedWhiteCards = useSelector(getSelectedWhiteCards);

  useEffect(() => {
    if (cardsLoaded && Object.entries(activeBlackCards).length === 0) {
      dispatch(drawBlackCard());
    }
  }, [cardsLoaded, activeBlackCards, dispatch]);

  useEffect(() => {
    if (cardsLoaded && activeWhiteCards.length < 7) {
      dispatch(drawWhiteCard());
    }
  }, [cardsLoaded, activeWhiteCards, dispatch]);

  const startNextTurn = () => {
    dispatch(nextTurn());
  };

  return (
    <div className="Playfield_Container">
      <div className="Playfield_Wrapper">
        <div className="BlackCard_Placement">
          {Object.entries(activeBlackCards).length > 0 ? (
            <BlackCard activeBlackCards={activeBlackCards} />
          ) : null}
        </div>
        <div className="Selected_WhiteCards_Placement">
          {selectedWhiteCards.length > 0
            ? selectedWhiteCards.map((whiteCard, index) => (
                <WhiteCard whiteCard={whiteCard} key={index} numbCard={index} />
              ))
            : null}
        </div>
      </div>
      {selectedWhiteCards.length < activeBlackCards.pick ? (
        <div className="WhiteCards_Placement">
          {activeWhiteCards.length > 0
            ? activeWhiteCards.map((whiteCard, index) => (
                <WhiteCard whiteCard={whiteCard} key={index} />
              ))
            : null}
        </div>
      ) : null}
      {selectedWhiteCards.length === activeBlackCards.pick ? (
        <div className="NextTurn_Button_Container">
          <button className="NextTurn_Button" onClick={startNextTurn}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Playfield;
