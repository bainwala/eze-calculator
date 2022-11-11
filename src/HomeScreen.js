import React, { useState } from "react";
import "./Styles/HomeScreen.css";
import Calculator from "./Components/Calculator";
import Expression from "./Components/Expression";
import Header from "./Components/Header";

const HomeScreen = () => {
  const [currExpression, setCurrExpression] = useState("");
  const [result, setResult] = useState("");
  const ops = ["+", "-", "/", "X"];
  const brackets = ["(", ")"];

  const Evaluate = () => {
    if (!validateExpression()) {
      setResult("Check Expression!");
      return;
    }
    currExpression.split(" ").forEach((term) => setResult(term));
  };

  const validateExpression = () => {
    var countBrackets = 0;
    currExpression.split(" ").forEach((term) => {
      if (term === "(") countBrackets = countBrackets + 1;
      if (term === ")") countBrackets = countBrackets - 1;
    });
    return countBrackets === 0;
  };

  const clicked = (symbol) => {
    var end = false;

    switch (symbol) {
      case "=":
        Evaluate();
        end = true;
        break;
      case "AC":
        setCurrExpression("");
        setResult("");
        end = true;
        break;
      case "exp":
        end = true;
        break;
      default:
        break;
    }
    if (end) return;
    const lastTerm = currExpression.split("")[currExpression.length - 1];
    if (
      (currExpression === "" || !lastTerm.match(/\d+/)) &&
      ops.includes(symbol)
    )
      return;
    var tempExpression =
      !ops.includes(symbol) && !brackets.includes(symbol)
        ? currExpression + symbol
        : currExpression + " " + symbol + " ";
    setCurrExpression(tempExpression);
  };

  return (
    <div className="homescreen">
      <Header />
      <div className="calc-area">
        <Calculator clickButton={(symbol) => clicked(symbol)} />
        <div className="expression-container">
          <Expression exp={currExpression} result={result} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
