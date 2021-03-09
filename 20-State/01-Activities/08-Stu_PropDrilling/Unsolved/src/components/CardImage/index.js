import React from "react";

function CardImg(props) {
  return (
    <div>
      <img className="card-img" src={""} alt="user thumbnail" />
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;