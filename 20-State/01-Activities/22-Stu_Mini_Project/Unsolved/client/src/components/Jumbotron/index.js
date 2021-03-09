import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
