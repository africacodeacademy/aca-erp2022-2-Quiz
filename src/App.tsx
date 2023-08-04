import React from 'react';
import logo from './aca.png';
import './App.css';
import Quiz from './pages/QuizPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />
      </header>
      <Quiz/>
    </div>
  );
}

export default App;