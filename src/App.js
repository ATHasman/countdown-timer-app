/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Event Countdown Timer Application</p>
      </div>
      <div className="App-body"></div>
      <div className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created by{" "}
          <a
            className="App-link"
            href="https://github.com/ATHasman"
            target="_blank"
            rel="noopener noreferrer"
          >
            ATHasman
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
