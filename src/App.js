import React from "react";
import Employee from "./pages/Employee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Employee />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;