import React from "react";
import "../Styles/Expression.css";

const Expression = (props) => {
  return (
    <div className="expression">
      <h1>{props.exp}</h1>
    </div>
  );
};

export default Expression;
