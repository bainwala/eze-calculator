import React from "react";
import "./Styles/HomeScreen.css";
import Calculator from "./Components/Calculator";
import Header from "./Components/Header";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Header />
      <Calculator />
    </div>
  );
};

export default HomeScreen;
