import React from 'react';

interface ProgressIndicatorProps {
  totalQuestions: number;
  currentQuestion: number;
  selectedAnswers: number[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  totalQuestions,
  currentQuestion,
  selectedAnswers
}) => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Progress</h3>
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
              index === currentQuestion
                ? 'bg-blue-600 text-white'
                : selectedAnswers[index] !== -1
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;