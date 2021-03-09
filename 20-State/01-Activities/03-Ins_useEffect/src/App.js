import React, { useState, useEffect } from "react";
import * as API from "./utils/API";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 0,
    lifeLongLearner: true,
    mood: "",
    name: ""
  });

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper.then((res) => {
      setDeveloperState(res);
      console.log("Developer State:");
      console.log(developerState);
    });
  }, []);

  return (
    <div className="card">
      <div>
        Name: {developerState.name}
      </div>
      <div>
        Status: {developerState.mood}
      </div>
      <div>
        Lifelong learner: {developerState.lifeLongLearner.toString()}
      </div>
      <div>
        Excitement Level: {developerState.excitementLevel}
      </div>
      <div className="btn-group">
        <button onClick={() => setDeveloperState({ ...developerState, mood: "lazy" })} className="btn btn-danger">
          Encourage Laziness
        </button>
        <button onClick={() => setDeveloperState({ ...developerState, mood: "determined" })} className="btn btn-success">
          Fill with Determination
        </button>
      </div>
    </div>
  );
}

export default App;
