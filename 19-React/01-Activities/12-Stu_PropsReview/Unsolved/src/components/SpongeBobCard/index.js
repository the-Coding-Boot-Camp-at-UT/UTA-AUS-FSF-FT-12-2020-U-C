import React from "react";
import "./style.css";

function SpongeBobCard() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="SpongeBob"
          src="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> SpongeBob
          </li>
          <li>
            <strong>Occupation:</strong> Fry Cook
          </li>
          <li>
            <strong>Location:</strong> A Pinapple Under the Sea
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpongeBobCard;
