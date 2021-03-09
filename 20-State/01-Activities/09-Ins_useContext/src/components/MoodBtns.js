import React from "react";

function MoodBtns({ changeMood }) {
  return (
    <div>
      <button onClick={() => changeMood("lazy")} className="btn btn-danger mx-4">
        Encourage Laziness
      </button>
      <button onClick={() => changeMood("determined")} className="btn btn-success mx-4">
        Fill with Determination
      </button>
    </div>
  );
}

export default MoodBtns;
