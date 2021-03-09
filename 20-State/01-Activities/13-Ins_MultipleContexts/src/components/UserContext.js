import React from "react";

// Set the user of the page to default to ""
// The getUserToken method defaults to an empty method
const UserContext = React.createContext({
  name: "",
  getUserToken: () => {}
});

export default UserContext;
