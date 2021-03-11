import React from "react";
import { useTodoContext } from "../utils/GlobalState";

function TodoList() {
  const [state, dispatch] = useTodoContext();

  return (
    <div>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item col-12" key={item.id}>
            <button
              className="btn btn-warning mr-4"
              onClick={() => dispatch({ type: "prioritize", index })}
            >
              Prioritize
            </button>
            <button
              className="btn btn-danger mr-4"
              onClick={() => dispatch({ type: "remove", index })}
            >
              X Remove
            </button>
            {index}:<span className={item.priority ? "font-weight-bold" : ""}> {item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
