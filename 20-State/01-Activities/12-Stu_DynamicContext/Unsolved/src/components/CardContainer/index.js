import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ title, image, language, handleBtnClick }) {
  return (
    <div className="jumbotron card-container">
      <Card
        title={title}
        image={image}
        language={language}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}

export default CardContainer;
