import React, { useRef } from "react";
import { useTodoContext } from "../utils/GlobalState";

function Form() {
  const inputRef = useRef();
  const [_, dispatch] = useTodoContext();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
    </div>
  );
}

export default Form;
