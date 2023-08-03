import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  handleAnswer: (answer: string) => void;
  showFinishButton?: boolean; // Optional prop to show "Finish Quiz" button
  onFinishQuiz?: () => void; // Optional callback when "Finish Quiz" button is clicked
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  handleAnswer,
}) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

