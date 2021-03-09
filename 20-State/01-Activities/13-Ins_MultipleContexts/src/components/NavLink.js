import React, { useContext } from "react";
import UserContext from "./UserContext";

function NavLink() {
  const { name } = useContext(UserContext);
  return (
    <div style={{ marginLeft: "40px" }}>
      <h2>Welcome {name}!</h2>
    </div>
  );
}

export default NavLink;
