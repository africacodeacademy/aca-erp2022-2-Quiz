import { useState, useEffect } from 'react';
import { QuizState } from '../types';
import { getHighScore } from '../utils/storage';

export const useQuiz = (totalQuestions: number) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswers: new Array(totalQuestions).fill(-1),
    score: 0,
    timeLeft: 3000, // 50 minutes in seconds
    isFinished: false,
    showResults: false
  });

  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    setHighScore(getHighScore());
  }, []);

  useEffect(() => {
    if (quizState.timeLeft > 0 && !quizState.isFinished) {
      const timer = setTimeout(() => {
        setQuizState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (quizState.timeLeft === 0) {
      finishQuiz();
    }
  }, [quizState.timeLeft, quizState.isFinished]);

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState(prev => ({ ...prev, selectedAnswers: newAnswers }));
  };

  const nextQuestion = () => {
    if (quizState.currentQuestion < totalQuestions - 1) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    }
  };

  const previousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }));
    }
  };

  const finishQuiz = () => {
    // This function will be implemented in the component
    // as it needs access to the questions array
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: new Array(totalQuestions).fill(-1),
      score: 0,
      timeLeft: 3000,
      isFinished: false,
      showResults: false
    });
  };

  return {
    quizState,
    setQuizState,
    highScore,
    setHighScore,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    resetQuiz
  };
};