// Congratulations.tsx
import React from 'react';

interface CongratulationsProps {
  score: number;
  totalQuestions: number;
}

const Congratulations: React.FC<CongratulationsProps> = ({ score, totalQuestions }) => {
  const percentageScore = (score / totalQuestions) * 100;
  let message;

  if (percentageScore === 100) {
    message = 'Congratulations! You answered all questions correctly. Perfect score!';
  } else if (percentageScore >= 75) {
    message = 'Congratulations! You did a great job!';
  } else if (percentageScore >= 50) {
    message = 'Congratulations! You passed the quiz!';
  } else {
    message = 'Good effort! Keep practicing to improve your score!';
  }

  return (
    <div>
      <h2>{message}</h2>
      <p>Your score: {score}/{totalQuestions}</p>
    </div>
  );
};

export default Congratulations;