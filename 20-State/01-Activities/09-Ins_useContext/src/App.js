import React, { useState, useEffect } from "react";
import DeveloperInfo from "./components/Developer";
import MoodBtns from "./components/MoodBtns";
import Nav from "./components/Nav";
import * as API from "./utils/API";
import DeveloperContext from "./utils/DeveloperContext";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    name: "",
    mood: "",
    lifeLongLearner: true,
    excitementLevel: 0
  });

  function changeMood(mood) {
    if(mood === "determined") {
      developerState.excitementLevel += 10000;
    }
    else {
      developerState.excitementLevel -= 10000;
    }
    setDeveloperState({
      ...developerState,
      mood
    });
  }

  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper.then((res) => {
      setDeveloperState(res);
    });
  }, []);

  return (
    <div className="container">
      <DeveloperContext.Provider value={developerState}>
        <Nav />
        <DeveloperInfo />
        <MoodBtns changeMood={changeMood} />
      </DeveloperContext.Provider>
    </div>
  );
}

export default App;
