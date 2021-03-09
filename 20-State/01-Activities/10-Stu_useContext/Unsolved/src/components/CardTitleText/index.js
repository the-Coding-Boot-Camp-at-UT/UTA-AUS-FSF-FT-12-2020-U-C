import React from "react";
import CardContext from "../../utils/CardContext";

function CardTitleText() {
  return <CardContext.Consumer>{({ title }) => <h2>{title}</h2>}</CardContext.Consumer>;
}

export default CardTitleText;
