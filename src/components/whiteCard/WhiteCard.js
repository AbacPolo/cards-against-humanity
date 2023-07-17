import React from "react";
import "./WhiteCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseWhiteCard,
  getActiveBlackCards,
  getSelectedWhiteCards,
} from "../../routes/board/boardSlice";
import classNames from "classnames";

function WhiteCard({ whiteCard }) {
  const dispatch = useDispatch();
  const activeBlackCard = useSelector(getActiveBlackCards);
  const selectedWhiteCards = useSelector(getSelectedWhiteCards);
  const textToPrint = whiteCard.text.replaceAll("_", "______");

  const handleSelectWhiteCard = () => {
    if (selectedWhiteCards.length < activeBlackCard.pick) {
      dispatch(chooseWhiteCard(whiteCard));
    }
  };

  return (
    <div
      className={classNames("WhiteCard_Container_Small each-slide-effect", {
        WhiteCard_Container_Big: selectedWhiteCards.includes(whiteCard),
      })}
      onClick={handleSelectWhiteCard}
    >
      <div className="WhiteCard_Wrapper">
        <h3
          className={classNames("WhiteCard_Text_Small", {
            WhiteCard_Text_Big: selectedWhiteCards.includes(whiteCard),
          })}
        >
          {textToPrint}
        </h3>
      </div>
    </div>
  );
}

export default WhiteCard;
