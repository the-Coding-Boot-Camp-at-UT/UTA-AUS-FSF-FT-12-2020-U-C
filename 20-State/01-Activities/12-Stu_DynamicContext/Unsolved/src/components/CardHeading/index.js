import React from "react";
import CardTitle from "../CardTitle";
import "./style.css";

function CardHeading({ title }) {
  return ( 
    <div>
      <CardTitle title={title} />
    </div> 
  );
}

export default CardHeading;
