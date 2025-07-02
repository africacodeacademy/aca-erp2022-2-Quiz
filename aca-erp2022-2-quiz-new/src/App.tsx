import React from 'react';
import QuizApp from './questions/questions'; 
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ACA Git & GitHub Quiz</h1>
      </header>
      <main className="quiz-container">
        <QuizApp />
      </main>
    </div>
  );
};

export default App;
