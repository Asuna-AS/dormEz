import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Home />
    </div>
  );
}

export default App;
