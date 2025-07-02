export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  concept: string;
  usedIn: string;
  category: 'git' | 'react' | 'typescript' | 'github' | 'development';
}

export interface UserAnswer {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  isComplete: boolean;
  score: number;
  startTime: number;
  questionStartTime: number;
}

export interface QuizSummaryProps {
  userAnswers: UserAnswer[];
  totalTime: number;
  onRestart: () => void;
  highScores: number[];
}

export interface StoredQuizResults {
  results: QuizResult[];
  bestScore: number;
  totalAttempts: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: UserAnswer[];
  questions: QuizQuestion[];
  completedAt: Date;
  duration: number;
}
