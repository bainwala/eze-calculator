import React, { useState } from "react";
import "./Styles/HomeScreen.css";
import Calculator from "./Components/Calculator";
import Expression from "./Components/Expression";
import Header from "./Components/Header";

const HomeScreen = () => {
  const [currExpression, setCurrExpression] = useState("");

  const clicked = (symbol) => {
    var tempExpression =
      currExpression === ""
        ? currExpression + symbol
        : currExpression + " " + symbol;
    setCurrExpression(tempExpression);
  };

  return (
    <div className="homescreen">
      <Header />
      <div className="calc-area">
        <Calculator clickButton={(symbol) => clicked(symbol)} />
        <Expression exp={currExpression} />
      </div>
    </div>
  );
};

export default HomeScreen;
