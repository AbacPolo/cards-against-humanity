import React from "react";
import "./BlackCard.css";

function BlackCard({ activeBlackCards }) {
  const textToPrint = activeBlackCards.text.replaceAll("_", "______");

  const BlackCard_Container = () => {
    const cardOffsetHeight = document.getElementById(`BlackCard_Container`)
      ? document.getElementById(`BlackCard_Container`).offsetHeight
      : null;
    const textOffsetHeight = document.getElementById(`BlackCard_Text`)
      ? document.getElementById(`BlackCard_Text`).offsetHeight
      : null;
    const marginBottom = cardOffsetHeight - 24 - textOffsetHeight - 48;
    return {
      marginBottom: `-${marginBottom}px`,
    };
  };

  return (
    <div
      className="BlackCard_Container"
      style={BlackCard_Container()}
      id="BlackCard_Container"
    >
      <div className="BlackCard_Wrapper">
        <h3 className="BlackCard_Text" id="BlackCard_Text">
          {textToPrint}
        </h3>
      </div>
    </div>
  );
}

export default BlackCard;
