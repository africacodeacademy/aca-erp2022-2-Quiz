import React from 'react';
import { Clock } from 'lucide-react';

interface QuizHeaderProps {
  timeLeft: number;
  currentQuestion: number;
  totalQuestions: number;
  highScore: number;
  progress: number;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const QuizHeader: React.FC<QuizHeaderProps> = ({
  timeLeft,
  currentQuestion,
  totalQuestions,
  highScore,
  progress
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">React TypeScript Quiz</h1>
        <div className="flex items-center gap-2 text-blue-600">
          <Clock className="w-5 h-5" />
          <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-sm text-gray-600">High Score: {highScore}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`bg-blue-600 h-2 rounded-full transition-all duration-300 quiz-progress-bar`}
          data-progress={progress}
        />
      </div>
    </div>
  );
};

export default QuizHeader;