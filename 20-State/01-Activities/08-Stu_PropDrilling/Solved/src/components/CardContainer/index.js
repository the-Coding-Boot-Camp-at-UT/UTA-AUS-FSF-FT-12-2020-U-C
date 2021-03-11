import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ title, image, profileUrl, handleBtnClick }) {
  return (
    <div className="jumbotron card-container">
      <Card
        title={title}
        image={image}
        profileUrl={profileUrl}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}

export default CardContainer;
