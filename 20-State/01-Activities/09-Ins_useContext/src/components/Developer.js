import React, { useContext } from "react";
import DeveloperContext from "../utils/DeveloperContext";

function DeveloperInfo() {
  const { name, mood, excitementLevel } = useContext(DeveloperContext);

  return (
    <div className="card">
      <div>
        Name: {name}
      </div>
      <div>
        Status: {mood}
      </div>
      <div>
        Excitement Level: {excitementLevel}
      </div>
    </div>
  );
}

export default DeveloperInfo;
