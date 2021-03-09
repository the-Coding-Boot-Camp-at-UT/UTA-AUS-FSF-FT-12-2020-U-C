import React, { useReducer } from "react";
import "./App.css";

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "add") {
      return state + 1;
    } else if (action === "subtract") {
      return state - 1;
    } else {
      return state;
    }
  }, 0);

  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button>
      <div>{count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
      </button>
    </div>
  );
}

export default App;
