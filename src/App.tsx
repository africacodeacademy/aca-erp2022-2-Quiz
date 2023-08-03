import React from "react";
import logo from "./aca.png";
import './App.css';
import './components/Questions'
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />
        <p>
          Click on the link below to access the ACA website
        </p>
        <a
          className="App-link"
          href="https://africacode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Love ACA
        </a>
        <Quiz/>
      </header>
    </div>
  );
}

export default App;
