import React, { createContext, useReducer, useContext } from "react";

const CountContext = createContext();
const { Provider } = CountContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "add":
    return { count: state.count + 1 };
  case "subtract":
    return { count: state.count - 1 };
  default:
    throw new Error(`Invalid action type: ${action.type}`);
  }
};

const CountProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCountContext = () => {
  return useContext(CountContext);
};

export { CountProvider, useCountContext };
