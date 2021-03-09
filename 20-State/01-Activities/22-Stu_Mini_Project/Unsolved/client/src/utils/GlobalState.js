import React, { useReducer } from "react";
// Don't forget to import all of your actions!

const reducer = (state, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return "PROVIDER ELEMENT HERE";
};

const useStoreContext = () => {};

export { StoreProvider, useStoreContext };
