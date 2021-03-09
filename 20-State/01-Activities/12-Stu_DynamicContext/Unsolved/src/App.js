import React from "react";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Gallery />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
