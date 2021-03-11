import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardImg() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <img className="card-img" src={user.image} alt="user thumbnail" />
      {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;