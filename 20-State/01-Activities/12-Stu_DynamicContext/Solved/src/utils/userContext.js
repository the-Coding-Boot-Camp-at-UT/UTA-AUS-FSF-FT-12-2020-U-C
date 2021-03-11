import React from "react";

const UserContext = React.createContext({
  login: "",
  language: "",
  image: "",
  handleBtnClick: () => {}
});

export default UserContext;
