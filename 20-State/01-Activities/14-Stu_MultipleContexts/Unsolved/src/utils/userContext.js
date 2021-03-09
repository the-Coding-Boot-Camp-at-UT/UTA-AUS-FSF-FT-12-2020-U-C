import React from "react";

const UserContext = React.createContext({
  user: {},
  users: [],
  handleBtnClick: () => {}
});

export default UserContext;
