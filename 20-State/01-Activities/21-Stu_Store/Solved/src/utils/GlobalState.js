import React, { createContext, useReducer, useContext } from "react";

const TodoContext = createContext({
  id: "",
  name: "",
  priority: false
});
const { Provider } = TodoContext;

function reducer(state, action) {
  switch (action.type) {
  case "add":
    return [
      ...state,
      {
        id: state.length * Math.random(),
        name: action.name
      }
    ];
  case "remove":
    return state.filter((_, index) => {
      return index !== action.index;
    });
  case "prioritize":
    return state.map((item, index) => {
      if (index === action.index) {
        return Object.assign({}, item, {
          priority: !item.priority
        });
      }
      return item;
    });
  default:
    return state;
  }
}

function TodoProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
