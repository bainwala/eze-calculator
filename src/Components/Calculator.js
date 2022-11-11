import React from "react";
import "../Styles/Calculator.css";
import CalcButton from "./CalcButton";

const Calculator = (props) => {
  return (
    <div className="calculator">
      <CalcButton symbol="+" clickButton={() => props.clickButton()} />
    </div>
  );
};

export default Calculator;
