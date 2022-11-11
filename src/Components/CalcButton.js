import React from "react";
import "../Styles/CalcButton.css";

const CalcButton = (props) => {
  return (
    <div
      className="calc-button"
      onClick={() => props.clickButton(props.symbol)}
    >
      <h1>{props.symbol}</h1>
    </div>
  );
};

export default CalcButton;
