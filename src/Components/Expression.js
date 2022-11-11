import React from "react";
import "../Styles/Expression.css";

const Expression = (props) => {
  return (
    <div className="expression">
      <div>
        <h1>Current Expression:</h1>
        <h2>{props.exp}</h2>
      </div>
      <div className="answer">
        <h2>Result:</h2>
        <h2>{props.result}</h2>
      </div>
    </div>
  );
};

export default Expression;
