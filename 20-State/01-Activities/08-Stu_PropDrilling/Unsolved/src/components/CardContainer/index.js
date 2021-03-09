import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer() {
  return (
    <div className="jumbotron card-container">
      {/* Pass props to Card */}
      <Card />
    </div>
  );
}

export default CardContainer;
