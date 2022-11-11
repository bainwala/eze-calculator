import React from "react";
import "../Styles/CalcButton.css";

const CalcButton = (props) => {
  return (
    <div className="calc-button" onClick={() => props.clickButton()}>
      <h1>{props.symbol}</h1>
    </div>
  );
};

export default CalcButton;
