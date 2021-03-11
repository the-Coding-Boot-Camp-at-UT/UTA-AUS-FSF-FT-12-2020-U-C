import React from "react";

function CardBody({ profileUrl }) {
  return (
    <p className="h4 pt-3">
      GitHub: <a target="blank" href={profileUrl}>{profileUrl}</a>
    </p>
  );
}

export default CardBody;
