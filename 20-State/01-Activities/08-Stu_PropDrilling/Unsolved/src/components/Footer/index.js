import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>LinkedUp { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Footer;
