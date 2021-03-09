import React from "react";
import NavLink from "./NavLink";

function Nav(props) {
  return (
    <div
      style={{
        width: "100%",
        padding: "30px",
        marginBottom: "30px",
        backgroundColor: props.theme === "dark" ? "#000099" : "white",
        color: props.theme === "dark" ? "white" : "black"
      }}
    >
      <NavLink />
    </div>
  );
}

export default Nav;
