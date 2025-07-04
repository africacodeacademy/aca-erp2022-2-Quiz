import React from 'react';
import './App.css';
// Make sure the file exists as QuizApp.tsx or QuizApp.jsx in the components folder
import QuizApp from './components/QuizApp'; // Update the path or filename if needed, e.g. './components/QuizApp.tsx'

function App() {
  return (
    <div className="App">
      <QuizApp />
    </div>
  );
}

export default App;