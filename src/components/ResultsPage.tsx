import React from 'react';
import { Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types';

interface ResultsPageProps {
  score: number;
  highScore: number;
  timeUsed: number;
  selectedAnswers: number[];
  questions: Question[];
  onReset: () => void;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const ResultsPage: React.FC<ResultsPageProps> = ({
  score,
  highScore,
  timeUsed,
  selectedAnswers,
  questions,
  onReset
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center mb-6">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
            <p className="text-xl text-gray-600">Your Score: {score}%</p>
            <p className="text-lg text-gray-500">High Score: {highScore}%</p>
            <p className="text-sm text-gray-400">Time Used: {formatTime(timeUsed)}</p>
          </div>
          
          <button
            onClick={onReset}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mb-6"
          >
            <RotateCcw className="w-5 h-5" />
            Take Quiz Again
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Question Summary</h2>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={question.id} className="border-l-4 border-gray-200 pl-4 py-3">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Q{index + 1}: {question.question}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Correct Answer:</span> {question.options[question.correct]}
                      </p>
                      {userAnswer !== -1 && userAnswer !== question.correct && (
                        <p className="text-sm text-red-600 mb-2">
                          <span className="font-medium">Your Answer:</span> {question.options[userAnswer]}
                        </p>
                      )}
                      <div className="bg-gray-50 rounded p-3 mt-2">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          <span className="text-blue-600">Concept:</span> {question.concept}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Explanation:</span> {question.explanation}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Usage:</span> {question.usage}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> {question.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;