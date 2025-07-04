export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  concept: string;
  explanation: string;
  usage: string;
  location: string;
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswers: number[];
  score: number;
  timeLeft: number;
  isFinished: boolean;
  showResults: boolean;
}

export interface QuizScore {
  score: number;
  date: string;
  timeUsed: number;
}