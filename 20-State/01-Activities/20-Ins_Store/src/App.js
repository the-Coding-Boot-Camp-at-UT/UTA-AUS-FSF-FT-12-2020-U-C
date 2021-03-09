import React from "react";
import Count from "./components/Count";
import { CountProvider } from "./utils/GlobalState";
import "./App.css";

function App() {
  return (
    <CountProvider>
      <div className="App">
        <Count />
      </div>
    </CountProvider>
  );
}

export default App;
