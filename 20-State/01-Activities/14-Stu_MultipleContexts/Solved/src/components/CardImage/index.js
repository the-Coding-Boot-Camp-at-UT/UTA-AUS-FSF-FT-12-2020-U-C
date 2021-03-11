import React from "react";
import UserContext from "../../utils/userContext";

function CardImg() {
  return (
    <UserContext.Consumer>
      {({user}) => (
        <div>
          <img className="card-img" src={user.image} alt="user thumbnail" />
          {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default CardImg;