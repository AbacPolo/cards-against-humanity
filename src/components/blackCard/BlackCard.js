import React from "react";
import "./BlackCard.css";

function BlackCard({activeBlackCards}) {
  const textToPrint = activeBlackCards.text.replaceAll('_','______');
  return (
    <div className="BlackCard_Container">
      <div className="BlackCard_Wrapper">
        <h3 className="BlackCard_Text">{textToPrint}</h3>
      </div>
    </div>
  );
}

export default BlackCard;