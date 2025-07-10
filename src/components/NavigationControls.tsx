import React from 'react';

interface NavigationControlsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onFinish
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <div className="flex gap-3">
          {currentQuestion === totalQuestions - 1 ? (
            <button
              onClick={onFinish}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={onNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationControls;