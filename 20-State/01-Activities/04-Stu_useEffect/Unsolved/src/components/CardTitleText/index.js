import React from "react";
import CardContext from "../../utils/CardContext";

const CardTitleText = () => {
  return <CardContext.Consumer>{({ title }) => <h2>{title}</h2>}</CardContext.Consumer>;
};

export default CardTitleText;
