import React, { useState, useEffect } from 'react';
import { Question, QuizState } from '../types';
import { saveQuizScore, getHighScore, saveHighScore } from '../utils/storage';
import QuizHeader from './QuizHeader';
import QuestionCard from './QuestionCard';
import NavigationControls from './NavigationControls';
import ProgressIndicator from './ProgressIndicator';
import ResultsPage from './ResultsPage';
import questionsDataRaw from '../data/questions.json';

const QuizApp: React.FC = () => {
  const questions: Question[] = React.useMemo(() => (
    Array.isArray(questionsDataRaw)
      ? questionsDataRaw
      : Array.isArray((questionsDataRaw as any).questions)
        ? (questionsDataRaw as any).questions
        : []
  ), []);
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswers: new Array(questions.length).fill(-1),
    score: 0,
    timeLeft: 3000,
    isFinished: false,
    showResults: false
  });

  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    setHighScore(getHighScore());
  }, []);

  const finishQuiz = React.useCallback(() => {
    let score = 0;
    quizState.selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        score++;
      }
    });

    const finalScore = Math.round((score / questions.length) * 100);
    const timeUsed = 3000 - quizState.timeLeft;
    
    saveQuizScore(finalScore, timeUsed);
    
    if (finalScore > highScore) {
      setHighScore(finalScore);
      saveHighScore(finalScore);
    }

    setQuizState(prev => ({ 
      ...prev, 
      score: finalScore, 
      isFinished: true,
      showResults: true 
    }));
  }, [quizState.selectedAnswers, questions, quizState.timeLeft, highScore]);

  useEffect(() => {
    if (quizState.timeLeft > 0 && !quizState.isFinished) {
      const timer = setTimeout(() => {
        setQuizState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (quizState.timeLeft === 0) {
      finishQuiz();
    }
  }, [quizState.timeLeft, quizState.isFinished, finishQuiz]);

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState(prev => ({ ...prev, selectedAnswers: newAnswers }));
  };

  const nextQuestion = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    }
  };

  const previousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }));
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: new Array(questions.length).fill(-1),
      score: 0,
      timeLeft: 3000,
      isFinished: false,
      showResults: false
    });
  };

  const currentQuestion = questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;

  if (quizState.showResults) {
    return (
      <ResultsPage
        score={quizState.score}
        highScore={highScore}
        timeUsed={3000 - quizState.timeLeft}
        selectedAnswers={quizState.selectedAnswers}
        questions={questions}
        onReset={resetQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <QuizHeader
          timeLeft={quizState.timeLeft}
          currentQuestion={quizState.currentQuestion}
          totalQuestions={questions.length}
          highScore={highScore}
          progress={progress}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={quizState.selectedAnswers[quizState.currentQuestion]}
          onSelectAnswer={selectAnswer}
        />

        <NavigationControls
          currentQuestion={quizState.currentQuestion}
          totalQuestions={questions.length}
          onPrevious={previousQuestion}
          onNext={nextQuestion}
          onFinish={finishQuiz}
        />

        <ProgressIndicator
          totalQuestions={questions.length}
          currentQuestion={quizState.currentQuestion}
          selectedAnswers={quizState.selectedAnswers}
        />
      </div>
    </div>
  );
};

export default QuizApp;
