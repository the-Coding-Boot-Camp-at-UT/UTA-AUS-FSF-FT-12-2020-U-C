import React from "react";

const MovieContext = React.createContext({
  result: {},
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {}
});

export default MovieContext;
