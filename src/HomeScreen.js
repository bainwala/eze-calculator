import React from "react";
import "./Styles/HomeScreen.css";
import Calculator from "./Components/Calculator";
import Expression from "./Components/Expression";
import Header from "./Components/Header";

const HomeScreen = () => {
  const clicked = () => {
    console.log("Clicked");
  };

  return (
    <div className="homescreen">
      <Header />
      <div className="calc-area">
        <Calculator clickButton={() => clicked()} />
        <Expression />
      </div>
    </div>
  );
};

export default HomeScreen;
