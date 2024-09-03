import React from "react";
import Tic from "./Components/Tic";
import "./App.css";

import { Menu } from "./Components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="container mt-5">
      <div className="header-section">
        <Menu  />
      </div>
      <div className="App d-flex justify-content-center align-items-center">
        <Tic/>
      </div>
    </div>
  );
}

export default App;
