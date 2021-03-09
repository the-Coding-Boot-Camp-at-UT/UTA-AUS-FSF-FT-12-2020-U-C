import React from "react";

// Set up a default object with the same property types as the value that we pass through the Provider.

const AlertContext = React.createContext({
  display: false,
  msg: "default value",
  theme: "",
  onClick: () => undefined
});

export default AlertContext;
