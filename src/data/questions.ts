
import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
 
  {
    id: 1,
    question: "What is the git command that downloads your repository from GitHub to your computer?",
    options: ["git push", "git commit", "git fork", "git clone"],
    correctAnswer: 3,
    explanation: "git clone creates a local copy of a remote repository on your computer.",
    concept: "Repository cloning",
    usedIn: "Used to download the initial project repository from GitHub",
    category: "git"
  },
  {
    id: 2,
    question: "Which command stages changes for the next commit?",
    options: ["git add", "git commit", "git push", "git pull"],
    correctAnswer: 0,
    explanation: "git add stages changes, preparing them to be committed.",
    concept: "Staging changes",
    usedIn: "Used throughout development to stage files before committing",
    category: "git"
  },
  {
    id: 3,
    question: "What command saves your staged changes to the repository?",
    options: ["git add", "git push", "git commit", "git pull"],
    correctAnswer: 2,
    explanation: "git commit saves staged changes to the local repository with a message.",
    concept: "Committing changes",
    usedIn: "Used to save development progress with descriptive messages",
    category: "git"
  },
  {
    id: 4,
    question: "Which command uploads your local commits to GitHub?",
    options: ["git pull", "git commit", "git add", "git push"],
    correctAnswer: 3,
    explanation: "git push uploads local commits to the remote repository.",
    concept: "Pushing changes",
    usedIn: "Used to share code changes with the remote repository",
    category: "git"
  },
  {
    id: 5,
    question: "What command creates a new branch?",
    options: ["git branch <name>", "git checkout -b <name>", "git switch -c <name>", "All of the above"],
    correctAnswer: 3,
    explanation: "All these commands can create new branches, with slight variations in syntax.",
    concept: "Branch creation",
    usedIn: "Used to create feature branches for development",
    category: "git"
  },
  {
    id: 6,
    question: "Which command shows the current status of your working directory?",
    options: ["git log", "git status", "git diff", "git show"],
    correctAnswer: 1,
    explanation: "git status shows which files are staged, unstaged, or untracked.",
    concept: "Repository status",
    usedIn: "Used frequently to check the state of files during development",
    category: "git"
  },
  {
    id: 7,
    question: "What does 'git pull' do?",
    options: ["Uploads changes", "Downloads and merges changes", "Creates a branch", "Deletes files"],
    correctAnswer: 1,
    explanation: "git pull downloads changes from remote repository and merges them into current branch.",
    concept: "Pulling changes",
    usedIn: "Used to sync local repository with remote changes",
    category: "git"
  },
  {
    id: 8,
    question: "Which command shows the commit history?",
    options: ["git status", "git log", "git diff", "git branch"],
    correctAnswer: 1,
    explanation: "git log displays the commit history with messages, authors, and dates.",
    concept: "Viewing history",
    usedIn: "Used to review development progress and commit history",
    category: "git"
  },
  {
    id: 9,
    question: "What does 'git checkout' do?",
    options: ["Commits changes", "Switches branches or restores files", "Pushes code", "Deletes branches"],
    correctAnswer: 1,
    explanation: "git checkout switches between branches or restores files to previous states.",
    concept: "Branch switching",
    usedIn: "Used to switch between feature branches during development",
    category: "git"
  },
  {
    id: 10,
    question: "Which command removes files from staging area?",
    options: ["git reset", "git rm", "git unstage", "git revert"],
    correctAnswer: 0,
    explanation: "git reset removes files from staging area without deleting the changes.",
    concept: "Unstaging changes",
    usedIn: "Used to unstage accidentally added files",
    category: "git"
  },

  
  {
    id: 11,
    question: "What is the correct way to create a functional component in React?",
    options: ["function MyComponent() {}", "const MyComponent = () => {}", "Both A and B", "class MyComponent"],
    correctAnswer: 2,
    explanation: "Both function declarations and arrow functions can create functional components.",
    concept: "Functional components",
    usedIn: "Used to create all quiz app components",
    category: "react"
  },
  {
    id: 12,
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1,
    explanation: "useState hook allows functional components to have state.",
    concept: "State management",
    usedIn: "Used to manage quiz state, current question, and user answers",
    category: "react"
  },
  {
    id: 13,
    question: "What does useEffect hook do?",
    options: ["Manages state", "Handles side effects", "Creates context", "Renders components"],
    correctAnswer: 1,
    explanation: "useEffect handles side effects like API calls, subscriptions, or DOM manipulation.",
    concept: "Side effects",
    usedIn: "Used to save quiz results to localStorage and handle component lifecycle",
    category: "react"
  },
  {
    id: 14,
    question: "How do you pass data from parent to child component?",
    options: ["Through state", "Through props", "Through context", "Through refs"],
    correctAnswer: 1,
    explanation: "Props are used to pass data from parent components to child components.",
    concept: "Props",
    usedIn: "Used to pass question data to Question component and quiz state to Summary",
    category: "react"
  },
  {
    id: 15,
    question: "What is the correct way to handle events in React?",
    options: ["onclick='handler()'", "onClick={handler}", "onClick='handler()'", "on-click={handler}"],
    correctAnswer: 1,
    explanation: "React uses camelCase event handlers with curly braces for JavaScript expressions.",
    concept: "Event handling",
    usedIn: "Used for answer selection, navigation buttons, and form submissions",
    category: "react"
  },

 
  {
    id: 16,
    question: "How do you define a type for a React component's props?",
    options: ["type Props = {}", "interface Props {}", "Both A and B", "const Props = {}"],
    correctAnswer: 2,
    explanation: "Both type aliases and interfaces can define prop types in TypeScript.",
    concept: "Type definitions",
    usedIn: "Used to define types for QuizQuestion, QuizState, and component props",
    category: "typescript"
  },
  {
    id: 17,
    question: "What does the '?' operator mean in TypeScript interfaces?",
    options: ["Required property", "Optional property", "Nullable property", "Boolean property"],
    correctAnswer: 1,
    explanation: "The '?' operator makes interface properties optional.",
    concept: "Optional properties",
    usedIn: "Used in QuizResult interface for optional timeCompleted property",
    category: "typescript"
  },
  {
    id: 18,
    question: "How do you define an array type in TypeScript?",
    options: ["Array<string>", "string[]", "Both A and B", "array<string>"],
    correctAnswer: 2,
    explanation: "TypeScript supports both Array<T> and T[] syntax for array types.",
    concept: "Array types",
    usedIn: "Used for quiz questions array and user answers array",
    category: "typescript"
  },
  {
    id: 19,
    question: "What is a union type in TypeScript?",
    options: ["string | number", "string & number", "string + number", "string = number"],
    correctAnswer: 0,
    explanation: "Union types use the '|' operator to combine multiple types.",
    concept: "Union types",
    usedIn: "Used for quiz categories and answer types (number | null)",
    category: "typescript"
  },
  {
    id: 20,
    question: "How do you type a function parameter in TypeScript?",
    options: ["function(param string)", "function(param: string)", "function(string param)", "function(param = string)"],
    correctAnswer: 1,
    explanation: "TypeScript uses colon syntax to specify parameter types.",
    concept: "Function typing",
    usedIn: "Used to type all quiz app functions and event handlers",
    category: "typescript"
  },

 
  {
    id: 21,
    question: "What is npm used for?",
    options: ["Version control", "Package management", "Code editing", "Database management"],
    correctAnswer: 1,
    explanation: "npm is the package manager for Node.js, used to install and manage dependencies.",
    concept: "Package management",
    usedIn: "Used to install React, TypeScript, and other project dependencies",
    category: "development"
  },
  {
    id: 22,
    question: "What command starts a React development server?",
    options: ["npm run dev", "npm start", "npm serve", "npm run start"],
    correctAnswer: 1,
    explanation: "npm start runs the development server for Create React App projects.",
    concept: "Development server",
    usedIn: "Used throughout development to run and test the quiz app",
    category: "development"
  },
  {
    id: 23,
    question: "What is the purpose of package.json?",
    options: ["Stores source code", "Manages dependencies and scripts", "Contains styles", "Defines routes"],
    correctAnswer: 1,
    explanation: "package.json contains project metadata, dependencies, and npm scripts.",
    concept: "Project configuration",
    usedIn: "Used to define project dependencies and build scripts",
    category: "development"
  },
  {
    id: 24,
    question: "What does 'npm run build' do?",
    options: ["Starts development server", "Creates production build", "Installs packages", "Runs tests"],
    correctAnswer: 1,
    explanation: "npm run build creates an optimized production build of the React app.",
    concept: "Production builds",
    usedIn: "Used to create production-ready files for deployment",
    category: "development"
  },
  {
    id: 25,
    question: "What is CircleCI used for?",
    options: ["Version control", "Continuous Integration/Deployment", "Code editing", "Package management"],
    correctAnswer: 1,
    explanation: "CircleCI automates testing, building, and deployment processes.",
    concept: "CI/CD",
    usedIn: "Used to automatically build and deploy the quiz app",
    category: "deployment"
  },
  {
    id: 26,
    question: "What is Heroku?",
    options: ["A database", "A cloud hosting platform", "A code editor", "A testing framework"],
    correctAnswer: 1,
    explanation: "Heroku is a cloud platform for hosting and deploying applications.",
    concept: "Cloud hosting",
    usedIn: "Used to host and serve the quiz app to users",
    category: "deployment"
  },
  {
    id: 27,
    question: "What file configures CircleCI?",
    options: [".circleci/config.yml", "circle.json", "ci-config.js", "deploy.yml"],
    correctAnswer: 0,
    explanation: "CircleCI configuration is stored in .circleci/config.yml file.",
    concept: "CI configuration",
    usedIn: "Used to define build and deployment pipeline for the quiz app",
    category: "deployment"
  },
  {
    id: 28,
    question: "What is localhost:3000?",
    options: ["Production URL", "Development server URL", "Database URL", "API endpoint"],
    correctAnswer: 1,
    explanation: "localhost:3000 is the default development server URL for React apps.",
    concept: "Local development",
    usedIn: "Used to access the quiz app during development",
    category: "development"
  },
  {
    id: 29,
    question: "What does 'npm test' do?",
    options: ["Builds the app", "Runs unit tests", "Starts server", "Installs packages"],
    correctAnswer: 1,
    explanation: "npm test runs the test suite for the application.",
    concept: "Testing",
    usedIn: "Used to run tests for quiz app components and functions",
    category: "development"
  },
  {
    id: 30,
    question: "What is the purpose of .gitignore file?",
    options: ["Store credentials", "Ignore files from version control", "Configure git", "Define branches"],
    correctAnswer: 1,
    explanation: ".gitignore specifies which files git should not track.",
    concept: "Version control configuration",
    usedIn: "Used to exclude node_modules and build files from git",
    category: "git"
  },

 
  {
    id: 31,
    question: "What is the difference between 'git merge' and 'git rebase'?",
    options: ["No difference", "Merge preserves history, rebase rewrites it", "Rebase is faster", "Merge is safer"],
    correctAnswer: 1,
    explanation: "git merge preserves branch history, while git rebase creates a linear history.",
    concept: "Branch integration",
    usedIn: "Used when integrating feature branches back to main",
    category: "git"
  },
  {
    id: 32,
    question: "What is React's Virtual DOM?",
    options: ["A testing tool", "A performance optimization technique", "A routing system", "A state manager"],
    correctAnswer: 1,
    explanation: "Virtual DOM is React's technique for optimizing UI updates by diffing virtual representations.",
    concept: "Virtual DOM",
    usedIn: "Automatically used by React to optimize quiz app rendering",
    category: "react"
  },
  {
    id: 33,
    question: "What is the purpose of keys in React lists?",
    options: ["Styling", "Security", "Performance optimization", "Event handling"],
    correctAnswer: 2,
    explanation: "Keys help React identify which items have changed for efficient re-rendering.",
    concept: "List optimization",
    usedIn: "Used when rendering quiz questions and answer options",
    category: "react"
  },
  {
    id: 34,
    question: "What does 'strict mode' do in TypeScript?",
    options: ["Makes code faster", "Enables stricter type checking", "Reduces bundle size", "Improves debugging"],
    correctAnswer: 1,
    explanation: "Strict mode enables additional type checking rules for better code quality.",
    concept: "Type safety",
    usedIn: "Enabled in tsconfig.json to catch potential errors early",
    category: "typescript"
  },
  {
    id: 35,
    question: "What is localStorage used for?",
    options: ["Server storage", "Temporary storage", "Persistent browser storage", "Database storage"],
    correctAnswer: 2,
    explanation: "localStorage provides persistent storage in the user's browser.",
    concept: "Browser storage",
    usedIn: "Used to save quiz scores and results between sessions",
    category: "development"
  },
  {
    id: 36,
    question: "What is the difference between let, const, and var?",
    options: ["No difference", "Different scoping rules", "Different performance", "Different syntax"],
    correctAnswer: 1,
    explanation: "let and const have block scope, var has function scope. const is immutable.",
    concept: "Variable declarations",
    usedIn: "Used throughout the quiz app for different variable needs",
    category: "development"
  },
  {
    id: 37,
    question: "What is JSX?",
    options: ["A programming language", "JavaScript XML syntax extension", "A testing framework", "A build tool"],
    correctAnswer: 1,
    explanation: "JSX is a syntax extension that allows writing HTML-like syntax in JavaScript.",
    concept: "JSX syntax",
    usedIn: "Used to create all quiz app components and UI elements",
    category: "react"
  },
  {
    id: 38,
    question: "What does 'git stash' do?",
    options: ["Deletes changes", "Saves changes temporarily", "Commits changes", "Pushes changes"],
    correctAnswer: 1,
    explanation: "git stash saves changes temporarily without committing them.",
    concept: "Temporary storage",
    usedIn: "Used to temporarily save work when switching branches",
    category: "git"
  },
  {
    id: 39,
    question: "What is the purpose of useCallback hook?",
    options: ["Manage state", "Memoize functions", "Handle effects", "Create context"],
    correctAnswer: 1,
    explanation: "useCallback memoizes functions to prevent unnecessary re-renders.",
    concept: "Performance optimization",
    usedIn: "Used to optimize event handlers in quiz components",
    category: "react"
  },
  {
    id: 40,
    question: "What is a TypeScript generic?",
    options: ["A type error", "A reusable type parameter", "A class method", "A variable type"],
    correctAnswer: 1,
    explanation: "Generics allow creating reusable components that work with multiple types.",
    concept: "Generic types",
    usedIn: "Used in utility functions for type-safe quiz operations",
    category: "typescript"
  },
  {
    id: 41,
    question: "What is environment variable?",
    options: ["A code variable", "A system configuration value", "A function parameter", "A component prop"],
    correctAnswer: 1,
    explanation: "Environment variables store configuration values outside the code.",
    concept: "Configuration management",
    usedIn: "Used for API keys and deployment-specific settings",
    category: "deployment"
  },
  {
    id: 42,
    question: "What does 'git remote' show?",
    options: ["Local branches", "Remote repositories", "File changes", "Commit history"],
    correctAnswer: 1,
    explanation: "git remote lists the remote repositories connected to your local repo.",
    concept: "Remote management",
    usedIn: "Used to manage connection between local and GitHub repository",
    category: "git"
  },
  {
    id: 43,
    question: "What is React component lifecycle?",
    options: ["Component creation process", "Stages a component goes through", "Component styling", "Component testing"],
    correctAnswer: 1,
    explanation: "Component lifecycle includes mounting, updating, and unmounting phases.",
    concept: "Component lifecycle",
    usedIn: "Understanding lifecycle helps manage quiz state and cleanup",
    category: "react"
  },
  {
    id: 44,
    question: "What is destructuring in JavaScript?",
    options: ["Breaking objects", "Extracting values from objects/arrays", "Deleting properties", "Creating objects"],
    correctAnswer: 1,
    explanation: "Destructuring extracts values from objects or arrays into variables.",
    concept: "Destructuring",
    usedIn: "Used to extract props and state values throughout quiz components",
    category: "development"
  },
  {
    id: 45,
    question: "What is the spread operator (...)?",
    options: ["Mathematical operator", "Object/array expansion operator", "Comparison operator", "Assignment operator"],
    correctAnswer: 1,
    explanation: "Spread operator expands objects or arrays into individual elements.",
    concept: "Spread operator",
    usedIn: "Used to update quiz state and combine objects immutably",
    category: "development"
  },
  {
    id: 46,
    question: "What is a React prop?",
    options: ["Component method", "Data passed to components", "Component state", "Event handler"],
    correctAnswer: 1,
    explanation: "Props are data passed from parent to child components.",
    concept: "Component communication",
    usedIn: "Used to pass quiz data between components",
    category: "react"
  },
  {
    id: 47,
    question: "What does 'npm ci' do?",
    options: ["Installs packages", "Clean install from lockfile", "Creates package.json", "Updates packages"],
    correctAnswer: 1,
    explanation: "npm ci performs a clean install using package-lock.json for consistent builds.",
    concept: "Dependency management",
    usedIn: "Used in CI/CD pipeline for reproducible builds",
    category: "development"
  },
  {
    id: 48,
    question: "What is a git conflict?",
    options: ["File deletion", "Competing changes to same code", "Branch creation error", "Push failure"],
    correctAnswer: 1,
    explanation: "Git conflicts occur when multiple people edit the same lines of code.",
    concept: "Conflict resolution",
    usedIn: "Handled when multiple developers work on the same project",
    category: "git"
  },
  {
    id: 49,
    question: "What is React strict mode?",
    options: ["Performance mode", "Development debugging mode", "Production mode", "Testing mode"],
    correctAnswer: 1,
    explanation: "Strict mode helps identify potential problems in React applications.",
    concept: "Development tools",
    usedIn: "Used to catch potential issues during quiz app development",
    category: "react"
  },
  {
    id: 50,
    question: "What is the purpose of .env files?",
    options: ["Store source code", "Store environment variables", "Configure git", "Define components"],
    correctAnswer: 1,
    explanation: ".env files store environment-specific configuration values.",
    concept: "Environment configuration",
    usedIn: "Used to store API keys and deployment-specific settings",
    category: "deployment"
  }
];

// function to get questions by category
export const getQuestionsByCategory = (category: QuizQuestion['category']) => {
  return quizQuestions.filter(q => q.category === category);
};

// function to shuffle questions
export const shuffleQuestions = (questions: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
