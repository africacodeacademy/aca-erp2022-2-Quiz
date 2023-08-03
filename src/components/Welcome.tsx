// components/Welcome.tsx
import React from "react";

interface WelcomeProps {
  onStartQuiz: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStartQuiz }) => {
  return (
    <div>
      <h1>Welcome to the Quiz App!</h1>
      <p>Click the button below to start the quiz.</p>
      <button onClick={onStartQuiz}>START QUIZ</button>
    </div>
  );
};

export default Welcome;
