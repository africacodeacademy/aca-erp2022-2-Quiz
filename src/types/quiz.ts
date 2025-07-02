

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; 
  explanation: string;
  concept: string; 
  usedIn: string; 
  category: 'git' | 'react' | 'typescript' | 'deployment' | 'development';
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  isCompleted: boolean;
  score: number;
  timeStarted: Date;
  timeCompleted?: Date;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: (number | null)[];
  questions: QuizQuestion[];
  completedAt: Date;
  duration: number; 
}

export interface StoredQuizResults {
  results: QuizResult[];
  bestScore: number;
  totalAttempts: number;
}
