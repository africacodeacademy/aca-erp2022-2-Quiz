import React from "react";

interface Answer {
    question: string;
    userAnswer: string;
    correctAnswer: string;
  }

interface ResultProps {
  score: number;
  userAnswers: Answer[];
}

const Result: React.FC<ResultProps> = ({ score, userAnswers }) => {
    return (
      <div>
        <h1>Quiz Results</h1>
        <p>Your Score: {score}</p>
        <h2>Compare your Answers:</h2>
        <ul>
          {userAnswers.map((answer, index) => (
            <li key={index}>
              <p>
                <strong>Question:</strong> {answer.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {answer.userAnswer}
              </p>
              <p>
                <strong>Correct Answer:</strong> {answer.correctAnswer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default Result;
