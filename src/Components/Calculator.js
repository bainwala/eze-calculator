import React from "react";
import "../Styles/Calculator.css";
import CalcButton from "./CalcButton";
import { buttons } from "../buttons";

const Calculator = (props) => {
  return (
    <div className="calculator">
      {buttons.map((button) => (
        <div className="buttonsGrid">
          <div>
            {button.map((btn) => (
              <CalcButton
                symbol={btn.symbol}
                clickButton={(symbol) => props.clickButton(symbol)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calculator;
