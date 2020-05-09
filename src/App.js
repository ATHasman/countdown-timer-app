/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/CountDownComp.jsx";
import "./components/EventInputComp.jsx";

function App() {
  const reactAppName = "Countdown Timer Application";
  return (
    <div className="App-container">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{reactAppName}</p>
      </div>
      <div className="App-body">
        <div className="event-input-comp"><EventInputComp/></div>
        <div className="countdown-comp"><CountDownComp/></div>
      </div>
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
