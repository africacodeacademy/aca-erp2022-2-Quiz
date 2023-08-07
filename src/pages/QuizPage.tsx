import React, { useState } from 'react';
import Question from '../components/Question';
import { questions } from '../questions';
import '../pages/QuizPage.css';

const BATCH_SIZE = 5;

const Quiz: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      if ((nextQuestion + 1) % BATCH_SIZE === 0) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      alert(`Quiz finished. You scored ${score}/${questions.length}`);
    }
  };

  return (
    <div className='quiz-container'>
      <h1 className="text-center">Quiz App</h1>
      <div className='question-container'>
        {questions
          .slice(
            currentPage * BATCH_SIZE,
            (currentPage + 1) * BATCH_SIZE
          )
          .map((question, index) => (
            <Question
              key={index}
              question={question.question}
              choices={question.options}
              answer={question.correctAnswer}
              onAnswer={handleAnswer}
            />
          ))}
      </div>
      <button className='navigation-buttons'
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button className='navigation-buttons'
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={(currentPage + 1) * BATCH_SIZE >= questions.length}
      >
        Next
      </button>
      <p className='score'>Score: {score}/{questions.length} </p>
    </div>
  );
};

export default Quiz;
