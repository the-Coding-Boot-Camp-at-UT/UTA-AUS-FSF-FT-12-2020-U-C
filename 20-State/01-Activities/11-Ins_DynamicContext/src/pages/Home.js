import React from "react";
import Content from "../components/Content";

function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Dynamic Context API Practice!</h1>
        <h3 className="mb-4">Press a button to get an alert!</h3>
      </div>
      <div style={{ margin: "0 auto" }}>
        <Content />
      </div>
    </div>
  );
}

export default Home;
