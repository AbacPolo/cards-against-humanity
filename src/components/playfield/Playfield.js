import React, { useEffect } from "react";
import "./Playfield.css";
import { useDispatch, useSelector } from "react-redux";
import {
  playCardsLoaded,
  getActiveBlackCards,
  getActiveWhiteCards,
  drawBlackCard,
  drawWhiteCard,
  getFirstDrawDone,
  finishedFirstDraw,
  getSelectedWhiteCards,
} from "../../routes/board/boardSlice";
import BlackCard from "../blackCard/BlackCard";
import WhiteCard from "../whiteCard/WhiteCard";

function Playfield() {
  const dispatch = useDispatch();
  const cardsLoaded = useSelector(playCardsLoaded);
  const activeBlackCards = useSelector(getActiveBlackCards);
  const activeWhiteCards = useSelector(getActiveWhiteCards);
  const firstDraw = useSelector(getFirstDrawDone);
  const selectedWhiteCards = useSelector(getSelectedWhiteCards);

  useEffect(() => {
    if (cardsLoaded && Object.entries(activeBlackCards).length === 0) {
      dispatch(drawBlackCard());
    }
  }, [cardsLoaded, activeBlackCards, dispatch]);

  useEffect(() => {
    if (cardsLoaded && !firstDraw && activeWhiteCards.length < 7) {
      dispatch(drawWhiteCard());
    } else if (cardsLoaded && !firstDraw && activeWhiteCards.length === 7) {
      dispatch(finishedFirstDraw());
    }
  }, [cardsLoaded, firstDraw, activeWhiteCards, dispatch]);

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
                <WhiteCard whiteCard={whiteCard} key={index} />
              ))
            : null}
        </div>
        { selectedWhiteCards.length < activeBlackCards.pick ? 
        <div className="WhiteCards_Placement">
          {activeWhiteCards.length > 0
            ? activeWhiteCards.map((whiteCard, index) => (
                <WhiteCard whiteCard={whiteCard} key={index} />
              ))
            : null}
        </div>: null}
      </div>
    </div>
  );
}

export default Playfield;
