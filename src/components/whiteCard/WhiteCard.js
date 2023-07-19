import React from "react";
import "./WhiteCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseWhiteCard,
  getActiveBlackCards,
  getSelectedWhiteCards,
} from "../../routes/board/boardSlice";
import classNames from "classnames";

function WhiteCard({ whiteCard, numbCard }) {
  const dispatch = useDispatch();
  const activeBlackCard = useSelector(getActiveBlackCards);
  const selectedWhiteCards = useSelector(getSelectedWhiteCards);
  const textToPrint = whiteCard.text.replaceAll("_", "______");

  const handleSelectWhiteCard = () => {
    if (selectedWhiteCards.length < activeBlackCard.pick) {
      dispatch(chooseWhiteCard(whiteCard));
    }
  };

  const WhiteCard_Container_Big = () => {
    const marginRight = 1 + numbCard;
    const cardOffsetHeight = document.getElementById(`Card${numbCard}`)
      ? document.getElementById(`Card${numbCard}`).offsetHeight
      : null;
    const textOffsetHeight = document.getElementById(`CardText${numbCard}`)
      ? document.getElementById(`CardText${numbCard}`).offsetHeight
      : null;
    const marginBottom = cardOffsetHeight - 24 - textOffsetHeight - 24;
    return {
      marginRight: `${marginRight}rem`,
      marginBottom: `-${marginBottom}px`,
    };
  };

  return (
    <div
      className={classNames("WhiteCard_Container_Small", {
        WhiteCard_Container_Big: selectedWhiteCards.includes(whiteCard),
      })}
      style={
        selectedWhiteCards.includes(whiteCard)
          ? WhiteCard_Container_Big()
          : null
      }
      id={`Card${numbCard}`}
      onClick={handleSelectWhiteCard}
    >
      <div className="WhiteCard_Wrapper">
        <h3
          className={classNames("WhiteCard_Text_Small", {
            WhiteCard_Text_Big: selectedWhiteCards.includes(whiteCard),
          })}
          id={`CardText${numbCard}`}
        >
          {textToPrint}
        </h3>
      </div>
    </div>
  );
}

export default WhiteCard;
