import React from "react";
import "./style.css";
import CardTitleText from "../CardTitleText";

function CardTitle({ title }) {
  return (
    <div className="blue text-center">
      <CardTitleText title={title} />
    </div>
  );
}

export default CardTitle;
