import { QuizScore } from '../types';

export const saveQuizScore = (score: number, timeUsed: number): void => {
  const savedScores = getQuizScores();
  savedScores.push({
    score,
    date: new Date().toISOString(),
    timeUsed
  });
  localStorage.setItem('quizScores', JSON.stringify(savedScores));
};

export const getQuizScores = (): QuizScore[] => {
  const savedScores = localStorage.getItem('quizScores');
  return savedScores ? JSON.parse(savedScores) : [];
};

export const getHighScore = (): number => {
  const savedHighScore = localStorage.getItem('quizHighScore');
  return savedHighScore ? parseInt(savedHighScore) : 0;
};

export const saveHighScore = (score: number): void => {
  localStorage.setItem('quizHighScore', score.toString());
};