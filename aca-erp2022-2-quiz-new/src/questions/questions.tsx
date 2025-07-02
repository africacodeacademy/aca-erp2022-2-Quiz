import React, { useState } from 'react';
import { 
  QuizQuestion, 
  UserAnswer, 
  QuizState 
} from '../types';
import { quizQuestions } from '../data/quizQuestions';

// Custom hooks
const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: [],
    isComplete: false,
    score: 0,
    startTime: Date.now(),
    questionStartTime: Date.now()
  });

  const [highScores, setHighScores] = useLocalStorage<number[]>('quiz-high-scores', []);

  const selectAnswer = (selectedIndex: number) => {
    const currentQuestion = quizQuestions[quizState.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;
    const timeSpent = Date.now() - quizState.questionStartTime;

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedIndex,
      isCorrect,
      timeSpent
    };

    const newAnswers = [...quizState.userAnswers, newAnswer];
    const newScore = newAnswers.filter(answer => answer.isCorrect).length;
    
    setQuizState(prev => ({
      ...prev,
      userAnswers: newAnswers,
      score: newScore,
      questionStartTime: Date.now()
    }));
  };

  const nextQuestion = () => {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const finalScore = quizState.score;
    const newHighScores = [...highScores, finalScore].sort((a, b) => b - a).slice(0, 10);
    setHighScores(newHighScores);
    
    setQuizState(prev => ({
      ...prev,
      isComplete: true
    }));
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      userAnswers: [],
      isComplete: false,
      score: 0,
      startTime: Date.now(),
      questionStartTime: Date.now()
    });
  };

  return {
    quizState,
    highScores,
    selectAnswer,
    nextQuestion,
    restartQuiz,
    currentQuestion: quizQuestions[quizState.currentQuestionIndex],
    totalQuestions: quizQuestions.length,
    progressPercentage: ((quizState.currentQuestionIndex + 1) / quizQuestions.length) * 100
  };
};

// Components
const ProgressBar: React.FC<{ percentage: number }> = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

const QuestionCard: React.FC<{
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showResult: boolean;
}> = ({ question, selectedAnswer, onSelectAnswer, showResult }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-start mb-4">
        <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">Ì≥ò</span>
        <h2 className="text-xl font-semibold text-gray-800 leading-tight">
          {question.question}
        </h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
          
          if (showResult) {
            if (index === question.correctAnswerIndex) {
              buttonClass += "border-green-500 bg-green-50 text-green-800";
            } else if (index === selectedAnswer && index !== question.correctAnswerIndex) {
              buttonClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
            }
          } else {
            if (selectedAnswer === index) {
              buttonClass += "border-blue-500 bg-blue-50 text-blue-800";
            } else {
              buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="flex items-center">
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span>{option}</span>
                {showResult && index === question.correctAnswerIndex && (
                  <span className="ml-auto text-green-600">‚úì</span>
                )}
                {showResult && index === selectedAnswer && index !== question.correctAnswerIndex && (
                  <span className="ml-auto text-red-600">‚úó</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Explanation:</h3>
          <p className="text-blue-700 mb-3">{question.explanation}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-blue-800">Concept:</span>
              <span className="text-blue-700 ml-2">{question.concept}</span>
            </div>
            <div>
              <span className="font-medium text-blue-800">Used in:</span>
              <span className="text-blue-700 ml-2">{question.usedIn}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const QuizSummary: React.FC<{
  userAnswers: UserAnswer[];
  totalTime: number;
  onRestart: () => void;
  highScores: number[];
}> = ({ userAnswers, totalTime, onRestart, highScores }) => {
  const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
  const totalQuestions = userAnswers.length;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const averageTimePerQuestion = Math.round(totalTime / totalQuestions / 1000);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "Excellent! You're a Git & Development expert! Ìæâ";
    if (percentage >= 80) return "Great job! You have a solid understanding! Ì±ç";
    if (percentage >= 70) return "Good work! Keep practicing to improve! Ì≤™";
    if (percentage >= 60) return "Not bad! Review the concepts and try again! Ì≥ö";
    return "Keep studying! Practice makes perfect! ‚úèÔ∏è";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <span className={`mx-auto mb-4 ${getScoreColor(scorePercentage)} text-6xl`}>ÌøÜ</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
          <p className={`text-2xl font-semibold ${getScoreColor(scorePercentage)}`}>
            {correctAnswers} / {totalQuestions} ({scorePercentage}%)
          </p>
          <p className="text-gray-600 mt-2">{getScoreMessage(scorePercentage)}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <span className="mx-auto text-blue-600 mb-2 text-2xl">‚è±Ô∏è</span>
            <p className="text-blue-800 font-semibold">Total Time</p>
            <p className="text-blue-600">{Math.round(totalTime / 1000)}s</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <span className="mx-auto text-green-600 mb-2 text-2xl">‚úì</span>
            <p className="text-green-800 font-semibold">Correct</p>
            <p className="text-green-600">{correctAnswers}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <span className="mx-auto text-purple-600 mb-2 text-2xl">‚è±Ô∏è</span>
            <p className="text-purple-800 font-semibold">Avg per Question</p>
            <p className="text-purple-600">{averageTimePerQuestion}s</p>
          </div>
        </div>

        {highScores.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">ÌøÜ High Scores</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {highScores.map((score, index) => (
                <div key={index} className="bg-white rounded p-2 text-center">
                  <span className="text-sm text-gray-600">#{index + 1}</span>
                  <div className="font-semibold text-gray-800">{score}/{totalQuestions}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={onRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            <span className="mr-2">Ì¥Ñ</span>
            Try Again
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Ì≥ù Detailed Review</h3>
        <div className="space-y-4">
          {userAnswers.map((answer, index) => {
            const question = quizQuestions.find(q => q.id === answer.questionId);
            if (!question) return null;

            return (
              <div key={answer.questionId} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-800">
                    Question {index + 1}: {question.question}
                  </h4>
                  {answer.isCorrect ? (
                    <span className="text-green-600 flex-shrink-0">‚úì</span>
                  ) : (
                    <span className="text-red-600 flex-shrink-0">‚úó</span>
                  )}
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Your answer:</span> {question.options[answer.selectedIndex]}
                </div>
                
                {!answer.isCorrect && (
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswerIndex]}
                  </div>
                )}
                
                <div className="text-sm text-gray-700 bg-gray-50 rounded p-3 mt-2">
                  <p className="mb-2"><strong>Explanation:</strong> {question.explanation}</p>
                  <p><strong>Concept:</strong> {question.concept} | <strong>Used in:</strong> {question.usedIn}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Main Quiz App Component
const QuizApp: React.FC = () => {
  const {
    quizState,
    highScores,
    selectAnswer,
    nextQuestion,
    restartQuiz,
    currentQuestion,
    totalQuestions,
    progressPercentage
  } = useQuiz();

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      selectAnswer(answerIndex);
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    nextQuestion();
  };

  const handleRestart = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    restartQuiz();
  };

  // Safety check for currentQuestion
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Loading questions...</h2>
        </div>
      </div>
    );
  }

  if (quizState.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <QuizSummary
          userAnswers={quizState.userAnswers}
          totalTime={Date.now() - quizState.startTime}
          onRestart={handleRestart}
          highScores={highScores}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Git & GitHub Development Quiz
            </h1>
            <div className="text-sm text-gray-600">
              Question {quizState.currentQuestionIndex + 1} of {totalQuestions}
            </div>
          </div>
          <ProgressBar percentage={progressPercentage} />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Score: {quizState.score}/{quizState.userAnswers.length}</span>
            <span>Category: {currentQuestion.category}</span>
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleAnswerSelect}
          showResult={showResult}
        />

        {showResult && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {quizState.currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
