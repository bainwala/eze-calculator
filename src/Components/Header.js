import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_contents">
        <img
          className="calc_logo"
          alt=""
          src="https://www.webii.net/blog/wp-content/uploads/2021/08/calculator-form-web-dev-illustration.png"
        />
        <h1>Calculate Ezely!</h1>
      </div>
    </div>
  );
};

export default Header;
