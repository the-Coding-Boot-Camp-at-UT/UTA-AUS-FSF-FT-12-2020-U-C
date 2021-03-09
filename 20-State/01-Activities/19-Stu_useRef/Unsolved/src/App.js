import React, { useReducer, useRef } from "react";
import "./App.css";

const TodoList = () => {
  // Placeholder array
  const items = [];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input className="form-control" placeholder="Start typing what you need to do..." />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            {item.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
