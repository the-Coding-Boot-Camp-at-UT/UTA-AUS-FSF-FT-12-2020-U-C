import React from "react";

const DeveloperContext = React.createContext({
  name: "",
  mood: "",
  lifeLongLearner: false,
  excitementLevel: 0
});

export default DeveloperContext;
