import React, { useState, useEffect } from "react";
import { 
  QuizQuestion, 
  QuizState, 
  QuizResult, 
  StoredQuizResults,
  UserAnswer
} from "../../types";
import { quizQuestions } from "../../data/quizQuestions"; // Moved questions to separate file

const LOCAL_STORAGE_KEY = "aca-quiz-results";

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: [],
    isComplete: false,
    score: 0,
    startTime: Date.now(),
    questionStartTime: Date.now()
  });

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [highScores, setHighScores] = useState<number[]>([]);

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];

  // Load high scores from localStorage
  useEffect(() => {
    const savedScores = localStorage.getItem('quiz-high-scores');
    if (savedScores) {
      setHighScores(JSON.parse(savedScores));
    }
  }, []);

  // Load selected answer when question changes
  useEffect(() => {
    const userAnswer = quizState.userAnswers.find(
      a => a.questionId === currentQuestion.id
    );
    setSelectedOption(userAnswer?.selectedIndex ?? null);
    setShowExplanation(false);
  }, [quizState.currentQuestionIndex, quizState.userAnswers]);

  const handleOptionSelect = (optionIndex: number) => {
    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    const timeSpent = Date.now() - quizState.questionStartTime;
    
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedIndex: optionIndex,
      isCorrect,
      timeSpent
    };

    setQuizState(prev => ({
      ...prev,
      userAnswers: [...prev.userAnswers, newAnswer],
      score: isCorrect ? prev.score + 1 : prev.score
    }));
    
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
        setQuizState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          questionStartTime: Date.now()
        }));
      } else {
        completeQuiz();
      }
    }
  };

  const completeQuiz = () => {
    const timeCompleted = new Date();
    const percentage = Math.round((quizState.score / quizQuestions.length) * 100);
    
    const result: QuizResult = {
      score: quizState.score,
      totalQuestions: quizQuestions.length,
      percentage,
      answers: quizState.userAnswers,
      questions: quizQuestions,
      completedAt: timeCompleted,
      duration: timeCompleted.getTime() - quizState.startTime
    };

    // Update high scores
    const newHighScores = [...highScores, quizState.score]
      .sort((a, b) => b - a)
      .slice(0, 10);
    setHighScores(newHighScores);
    localStorage.setItem('quiz-high-scores', JSON.stringify(newHighScores));
    
    // Save to localStorage
    saveQuizResult(result);
    
    setQuizResult(result);
    setQuizState(prev => ({
      ...prev,
      isComplete: true
    }));
  };

  const saveQuizResult = (result: QuizResult) => {
    try {
      const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
      const storedResults: StoredQuizResults = existingData 
        ? JSON.parse(existingData)
        : { results: [], bestScore: 0, totalAttempts: 0 };

      storedResults.results.push(result);
      storedResults.totalAttempts += 1;
      storedResults.bestScore = Math.max(storedResults.bestScore, result.percentage);

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedResults));
    } catch (error) {
      console.error('Error saving quiz result:', error);
    }
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
    setSelectedOption(null);
    setShowExplanation(false);
    setQuizResult(null);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const formatDuration = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (percentage: number): string => {
    if (percentage >= 80) return '#28a745';
    if (percentage >= 60) return '#ffc107';
    return '#dc3545';
  };

  // Quiz completion view
  if (quizState.isComplete && quizResult) {
    return (
      <div className="quiz-container">
        {/* ... existing completion view JSX ... */}
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {/* ... existing quiz in-progress JSX ... */}
    </div>
  );
};

export default Quiz;
