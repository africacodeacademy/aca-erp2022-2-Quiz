import { QuizQuestion } from "../types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary purpose of Git?",
    options: [
      "To compile code",
      "To track changes in source code during software development",
      "To deploy applications",
      "To debug applications"
    ],
    correctAnswerIndex: 1,
    explanation: "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    concept: "Version Control",
    usedIn: "Software Development",
    category: "git"
  },
  {
    id: 2,
    question: "What command is used to clone a repository from GitHub?",
    options: [
      "git push",
      "git pull",
      "git clone",
      "git fork"
    ],
    correctAnswerIndex: 2,
    explanation: "git clone creates a copy of a remote repository on your local machine, including all files, history, and branches.",
    concept: "Repository Cloning",
    usedIn: "Initial project setup",
    category: "git"
  },
  {
    id: 3,
    question: "What does 'git add .' do?",
    options: [
      "Commits all changes",
      "Pushes changes to remote repository",
      "Stages all changes in the current directory for commit",
      "Creates a new branch"
    ],
    correctAnswerIndex: 2,
    explanation: "git add . stages all modified and new files in the current directory and subdirectories for the next commit.",
    concept: "Staging Changes",
    usedIn: "Preparing files for commit",
    category: "git"
  },
  {
    id: 4,
    question: "What is JSX in React?",
    options: [
      "A new programming language",
      "A syntax extension for JavaScript that produces React elements",
      "A CSS preprocessor",
      "A database query language"
    ],
    correctAnswerIndex: 1,
    explanation: "JSX stands for JavaScript XML. It allows us to write HTML elements in JavaScript and place them in the DOM without createElement() and appendChild() methods.",
    concept: "JSX Syntax",
    usedIn: "React component development",
    category: "react"
  },
  {
    id: 5,
    question: "What does TypeScript add to JavaScript?",
    options: [
      "Runtime performance improvements",
      "Static type definitions",
      "Automatic code optimization",
      "Built-in database connectivity"
    ],
    correctAnswerIndex: 1,
    explanation: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale by adding static type definitions.",
    concept: "Static Typing",
    usedIn: "Type-safe development",
    category: "typescript"
  },
  {
    id: 6,
    question: "Which command creates a new Git branch?",
    options: [
      "git branch new-branch",
      "git create new-branch",
      "git new new-branch",
      "git make new-branch"
    ],
    correctAnswerIndex: 0,
    explanation: "git branch <branch-name> creates a new branch. You can also use 'git checkout -b <branch-name>' to create and switch to the new branch.",
    concept: "Branch Creation",
    usedIn: "Feature development workflow",
    category: "git"
  },
  {
    id: 7,
    question: "What is the main benefit of using React hooks?",
    options: [
      "Better performance",
      "Smaller bundle size",
      "Using state and lifecycle features in functional components",
      "Automatic error handling"
    ],
    correctAnswerIndex: 2,
    explanation: "Hooks let you use state and other React features without writing a class component. They allow you to reuse stateful logic between components.",
    concept: "React Hooks",
    usedIn: "Functional component state management",
    category: "react"
  },
  {
    id: 8,
    question: "Which command shows the current status of your Git repository?",
    options: [
      "git info",
      "git status",
      "git check",
      "git state"
    ],
    correctAnswerIndex: 1,
    explanation: "git status displays the state of the working directory and staging area, showing which changes have been staged, which haven't, and which files aren't being tracked.",
    concept: "Repository Status",
    usedIn: "Checking file changes before commit",
    category: "git"
  },
  {
    id: 9,
    question: "What is a Pull Request in GitHub?",
    options: [
      "A request to download code",
      "A request to merge changes from one branch into another",
      "A request to delete a repository",
      "A request to create a new repository"
    ],
    correctAnswerIndex: 1,
    explanation: "A Pull Request (PR) is a method of submitting contributions to a project. It allows developers to tell others about changes they've pushed to a branch in a repository.",
    concept: "Pull Requests",
    usedIn: "Code review and collaboration",
    category: "github"
  },
  {
    id: 10,
    question: "Which TypeScript keyword is used to define custom types?",
    options: [
      "type",
      "define",
      "custom",
      "struct"
    ],
    correctAnswerIndex: 0,
    explanation: "The 'type' keyword in TypeScript is used to create type aliases, allowing you to define custom types for better code organization and reusability.",
    concept: "Type Aliases",
    usedIn: "Defining component props and state types",
    category: "typescript"
  },
  {
    id: 11,
    question: "What does 'git commit -m' do?",
    options: [
      "Merges branches",
      "Creates a snapshot of staged changes with a message",
      "Pushes changes to remote repository",
      "Creates a new branch"
    ],
    correctAnswerIndex: 1,
    explanation: "git commit -m creates a new commit with the staged changes and includes a commit message describing the changes made.",
    concept: "Committing Changes",
    usedIn: "Saving development progress",
    category: "git"
  },
  {
    id: 12,
    question: "Which React hook is used for managing component state?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useMemo"
    ],
    correctAnswerIndex: 1,
    explanation: "useState is a React hook that lets you add state to functional components. It returns a state variable and a function to update it.",
    concept: "State Management",
    usedIn: "Managing quiz state and user interactions",
    category: "react"
  },
  {
    id: 13,
    question: "What is the purpose of .gitignore file?",
    options: [
      "To list files that should be committed",
      "To specify files and directories that Git should ignore",
      "To configure Git settings",
      "To store commit messages"
    ],
    correctAnswerIndex: 1,
    explanation: "The .gitignore file tells Git which files (or patterns) it should ignore. It's usually used to avoid committing temporary files, dependencies, or sensitive information.",
    concept: "File Exclusion",
    usedIn: "Excluding node_modules and build files",
    category: "git"
  },
  {
    id: 14,
    question: "Which command switches to a different branch in Git?",
    options: [
      "git switch branch-name",
      "git checkout branch-name",
      "git change branch-name",
      "Both A and B"
    ],
    correctAnswerIndex: 3,
    explanation: "Both 'git checkout' and 'git switch' can be used to switch branches. 'git switch' is a newer command specifically designed for switching branches.",
    concept: "Branch Switching",
    usedIn: "Moving between feature branches",
    category: "git"
  },
  {
    id: 15,
    question: "What is the purpose of package.json in a Node.js project?",
    options: [
      "To store Git configuration",
      "To define project metadata and dependencies",
      "To configure TypeScript",
      "To store environment variables"
    ],
    correctAnswerIndex: 1,
    explanation: "package.json is a manifest file that contains metadata about the project, including dependencies, scripts, version information, and project configuration.",
    concept: "Project Configuration",
    usedIn: "Managing React and TypeScript dependencies",
    category: "development"
  },
  {
    id: 16,
    question: "Which command merges changes from one branch into the current branch?",
    options: [
      "git combine",
      "git merge",
      "git join",
      "git unite"
    ],
    correctAnswerIndex: 1,
    explanation: "git merge integrates changes from another branch into the current branch, creating a merge commit if necessary.",
    concept: "Branch Merging",
    usedIn: "Integrating feature branches into main",
    category: "git"
  },
  {
    id: 17,
    question: "What is the difference between interface and type in TypeScript?",
    options: [
      "No difference, they're identical",
      "Interface can be extended, type cannot",
      "Interface can be reopened and extended, type creates a new alias",
      "Type is for primitives, interface is for objects"
    ],
    correctAnswerIndex: 2,
    explanation: "Interfaces can be reopened and extended later, while types create aliases. Interfaces are better for object shapes that might be extended, types are better for unions and computed types.",
    concept: "Type vs Interface",
    usedIn: "Defining component props and data structures",
    category: "typescript"
  },
  {
    id: 18,
    question: "What does 'git push origin main' do?",
    options: [
      "Pulls changes from the main branch",
      "Pushes local main branch commits to the remote origin repository",
      "Creates a new branch called main",
      "Merges origin with main"
    ],
    correctAnswerIndex: 1,
    explanation: "This command uploads your local main branch commits to the remote repository named 'origin', making your changes available to others.",
    concept: "Pushing Changes",
    usedIn: "Sharing code with team and deployment",
    category: "git"
  },
  {
    id: 19,
    question: "Which React hook is used for side effects?",
    options: [
      "useState",
      "useEffect",
      "useCallback",
      "useRef"
    ],
    correctAnswerIndex: 1,
    explanation: "useEffect is used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
    concept: "Side Effects",
    usedIn: "Loading quiz data and managing timers",
    category: "react"
  },
  {
    id: 20,
    question: "What is a GitHub fork?",
    options: [
      "A copy of a repository under your GitHub account",
      "A branch in Git",
      "A merge conflict",
      "A type of commit"
    ],
    correctAnswerIndex: 0,
    explanation: "A fork is a copy of a repository that allows you to experiment with changes without affecting the original project. You can later submit pull requests to contribute back.",
    concept: "Repository Forking",
    usedIn: "Contributing to open source projects",
    category: "github"
  },
  {
    id: 21,
    question: "What does npm install do?",
    options: [
      "Installs Node.js",
      "Installs dependencies listed in package.json",
      "Installs Git",
      "Installs TypeScript"
    ],
    correctAnswerIndex: 1,
    explanation: "npm install reads package.json and installs all the dependencies listed there into the node_modules directory.",
    concept: "Dependency Installation",
    usedIn: "Setting up project dependencies",
    category: "development"
  },
  {
    id: 22,
    question: "Which command shows the commit history in Git?",
    options: [
      "git history",
      "git log",
      "git commits",
      "git show"
    ],
    correctAnswerIndex: 1,
    explanation: "git log displays the commit history, showing commit hashes, authors, dates, and commit messages in reverse chronological order.",
    concept: "Commit History",
    usedIn: "Reviewing project development history",
    category: "git"
  },
  {
    id: 23,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To style list items",
      "To help React identify which items have changed",
      "To sort the list",
      "To add event listeners"
    ],
    correctAnswerIndex: 1,
    explanation: "Keys help React identify which items have changed, been added, or removed. This helps React optimize rendering performance when lists change.",
    concept: "React Keys",
    usedIn: "Rendering quiz questions and options",
    category: "react"
  },
  {
    id: 24,
    question: "What does 'git pull' do?",
    options: [
      "Pushes changes to remote repository",
      "Fetches and merges changes from remote repository",
      "Creates a new branch",
      "Deletes local changes"
    ],
    correctAnswerIndex: 1,
    explanation: "git pull fetches changes from the remote repository and automatically merges them into your current branch. It's equivalent to git fetch followed by git merge.",
    concept: "Pulling Changes",
    usedIn: "Syncing with remote repository updates",
    category: "git"
  },
  {
    id: 25,
    question: "Which TypeScript feature helps catch errors at compile time?",
    options: [
      "Dynamic typing",
      "Static type checking",
      "Runtime validation",
      "Automatic debugging"
    ],
    correctAnswerIndex: 1,
    explanation: "TypeScript's static type checking analyzes your code before it runs, catching type-related errors during compilation rather than at runtime.",
    concept: "Static Type Checking",
    usedIn: "Preventing runtime errors in quiz logic",
    category: "typescript"
  },
  {
    id: 26,
    question: "What is GitHub Actions?",
    options: [
      "A code editor",
      "A CI/CD platform for automating workflows",
      "A project management tool",
      "A database service"
    ],
    correctAnswerIndex: 1,
    explanation: "GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline directly in your GitHub repository.",
    concept: "Continuous Integration",
    usedIn: "Automated testing and deployment",
    category: "github"
  },
  {
    id: 27,
    question: "What does 'git diff' show?",
    options: [
      "Differences between commits, branches, or files",
      "All files in the repository",
      "Commit messages",
      "Branch names"
    ],
    correctAnswerIndex: 0,
    explanation: "git diff shows the differences between various Git objects like commits, branches, files, or the working directory and staging area.",
    concept: "Viewing Changes",
    usedIn: "Reviewing changes before committing",
    category: "git"
  },
  {
    id: 28,
    question: "Which React pattern is used for sharing logic between components?",
    options: [
      "Custom Hooks",
      "Props drilling",
      "State lifting",
      "Component nesting"
    ],
    correctAnswerIndex: 0,
    explanation: "Custom Hooks allow you to extract component logic into reusable functions that can be shared between multiple components.",
    concept: "Custom Hooks",
    usedIn: "Sharing quiz state logic and localStorage functionality",
    category: "react"
  },
  {
    id: 29,
    question: "What is the purpose of TypeScript's tsconfig.json?",
    options: [
      "To list project dependencies",
      "To configure TypeScript compiler options",
      "To define Git settings",
      "To store environment variables"
    ],
    correctAnswerIndex: 1,
    explanation: "tsconfig.json is the configuration file for TypeScript compiler, specifying compiler options, file inclusion/exclusion patterns, and project settings.",
    concept: "TypeScript Configuration",
    usedIn: "Configuring TypeScript compilation for the quiz app",
    category: "typescript"
  },
  {
    id: 30,
    question: "Which command undoes the last commit but keeps changes in working directory?",
    options: [
      "git reset --soft HEAD~1",
      "git reset --hard HEAD~1",
      "git revert HEAD",
      "git undo"
    ],
    correctAnswerIndex: 0,
    explanation: "git reset --soft HEAD~1 moves the HEAD pointer back one commit but keeps the changes in the staging area, allowing you to modify and recommit.",
    concept: "Undoing Commits",
    usedIn: "Correcting commit mistakes during development",
    category: "git"
  },
  {
    id: 31,
    question: "What is localStorage in web browsers?",
    options: [
      "A database for server-side storage",
      "A client-side storage mechanism that persists data",
      "A Git storage system",
      "A React state management library"
    ],
    correctAnswerIndex: 1,
    explanation: "localStorage is a web API that allows you to store data locally within the user's browser with no expiration time, persisting even after the browser is closed.",
    concept: "Client-side Storage",
    usedIn: "Saving quiz scores and progress",
    category: "development"
  },
  {
    id: 32,
    question: "What does 'git stash' do?",
    options: [
      "Permanently deletes changes",
      "Temporarily stores changes without committing",
      "Creates a new branch",
      "Merges branches"
    ],
    correctAnswerIndex: 1,
    explanation: "git stash temporarily saves your uncommitted changes and reverts the working directory to match the HEAD commit. You can later apply the stashed changes.",
    concept: "Temporary Storage",
    usedIn: "Switching branches with uncommitted changes",
    category: "git"
  },
  {
    id: 33,
    question: "Which is the correct way to define a React functional component in TypeScript?",
    options: [
      "const Component = () => { return <div />; }",
      "const Component: React.FC = () => <div />;",
      "function Component(): JSX.Element { return <div />; }",
      "All of the above"
    ],
    correctAnswerIndex: 3,
    explanation: "All three are valid ways to define React functional components in TypeScript, each with slightly different type annotations and syntax styles.",
    concept: "Component Definition",
    usedIn: "Creating quiz components with proper typing",
    category: "react"
  },
  {
    id: 34,
    question: "What is the purpose of a README.md file in a GitHub repository?",
    options: [
      "To store configuration settings",
      "To provide documentation and instructions about the project",
      "To list all commits",
      "To configure deployment settings"
    ],
    correctAnswerIndex: 1,
    explanation: "README.md serves as the front page of your repository, providing essential information about the project, installation instructions, usage examples, and contribution guidelines.",
    concept: "Project Documentation",
    usedIn: "Documenting quiz app setup and deployment",
    category: "github"
  },
  {
    id: 35,
    question: "Which command creates a new Git repository?",
    options: [
      "git new",
      "git create",
      "git init",
      "git start"
    ],
    correctAnswerIndex: 2,
    explanation: "git init initializes a new Git repository in the current directory, creating the .git folder and setting up the repository structure.",
    concept: "Repository Initialization",
    usedIn: "Starting new projects from scratch",
    category: "git"
  },
  {
    id: 36,
    question: "What is prop drilling in React?",
    options: [
      "A performance optimization technique",
      "Passing props through multiple component layers",
      "A method for creating new components",
      "A way to handle events"
    ],
    correctAnswerIndex: 1,
    explanation: "Prop drilling occurs when you pass data from a parent component to deeply nested child components through intermediate components that don't use the data.",
    concept: "Props Management",
    usedIn: "Avoiding unnecessary prop passing in quiz components",
    category: "react"
  },
  {
    id: 37,
    question: "What does the 'strict' mode do in TypeScript?",
    options: [
      "Makes the code run faster",
      "Enables a set of strict type checking options",
      "Automatically fixes errors",
      "Compresses the output"
    ],
    correctAnswerIndex: 1,
    explanation: "Strict mode enables several strict type checking options like noImplicitAny, strictNullChecks, and others, helping catch more potential errors.",
    concept: "Strict Type Checking",
    usedIn: "Ensuring type safety in quiz application",
    category: "typescript"
  },
  {
    id: 38,
    question: "What is a merge conflict in Git?",
    options: [
      "When Git cannot automatically merge changes from different branches",
      "When a commit fails",
      "When a branch is deleted",
      "When pushing to a remote repository fails"
    ],
    correctAnswerIndex: 0,
    explanation: "A merge conflict occurs when Git cannot automatically resolve differences in code between two commits, requiring manual intervention to resolve conflicts.",
    concept: "Merge Conflicts",
    usedIn: "Resolving conflicts when merging feature branches",
    category: "git"
  },
  {
    id: 39,
    question: "Which React hook is used to optimize expensive computations?",
    options: [
      "useState",
      "useEffect",
      "useMemo",
      "useCallback"
    ],
    correctAnswerIndex: 2,
    explanation: "useMemo memoizes the result of expensive computations and only recalculates when its dependencies change, improving performance.",
    concept: "Performance Optimization",
    usedIn: "Optimizing quiz score calculations",
    category: "react"
  },
  {
    id: 40,
    question: "What is continuous integration (CI)?",
    options: [
      "A way to backup code",
      "Automatically integrating code changes and running tests",
      "A deployment strategy",
      "A version control system"
    ],
    correctAnswerIndex: 1,
    explanation: "CI is a development practice where developers integrate code into a shared repository frequently, with each integration automatically tested to detect integration errors quickly.",
    concept: "Continuous Integration",
    usedIn: "Automated testing and deployment pipelines",
    category: "development"
  },
  {
    id: 41,
    question: "Which command shows differences between staged and unstaged changes?",
    options: [
      "git diff",
      "git diff --staged",
      "git diff --cached",
      "Both B and C"
    ],
    correctAnswerIndex: 3,
    explanation: "Both 'git diff --staged' and 'git diff --cached' show differences between staged changes and the last commit. 'git diff' without options shows unstaged changes.",
    concept: "Staged vs Unstaged Changes",
    usedIn: "Reviewing changes before committing",
    category: "git"
  },
  {
    id: 42,
    question: "What is the virtual DOM in React?",
    options: [
      "A real DOM element",
      "A JavaScript representation of the actual DOM",
      "A CSS framework",
      "A database abstraction"
    ],
    correctAnswerIndex: 1,
    explanation: "The virtual DOM is a JavaScript representation of the actual DOM kept in memory and synced with the real DOM through a process called reconciliation.",
    concept: "Virtual DOM",
    usedIn: "Efficient UI updates in quiz interactions",
    category: "react"
  },
  {
    id: 43,
    question: "What is the purpose of TypeScript's 'any' type?",
    options: [
      "To represent any value and disable type checking",
      "To represent only numbers",
      "To represent only strings",
      "To represent boolean values"
    ],
    correctAnswerIndex: 0,
    explanation: "The 'any' type in TypeScript disables type checking and allows any value to be assigned. It should be used sparingly as it defeats the purpose of type safety.",
    concept: "Any Type",
    usedIn: "Temporary solutions when migrating JavaScript to TypeScript",
    category: "typescript"
  },
  {
    id: 44,
    question: "What does 'git remote -v' show?",
    options: [
      "Local branches",
      "Remote repository URLs",
      "Commit history",
      "File differences"
    ],
    correctAnswerIndex: 1,
    explanation: "git remote -v displays the remote repositories associated with your local repository, showing both the name and URL of each remote.",
    concept: "Remote Repositories",
    usedIn: "Verifying remote repository connections",
    category: "git"
  },
  {
    id: 45,
    question: "Which HTTP method is typically used to fetch data in web applications?",
    options: [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    correctAnswerIndex: 1,
    explanation: "GET is the HTTP method used to retrieve data from a server. It's safe and idempotent, meaning it doesn't change server state and multiple identical requests have the same effect.",
    concept: "HTTP Methods",
    usedIn: "Fetching quiz data from APIs",
    category: "development"
  },
  {
    id: 46,
    question: "What is the purpose of React's useCallback hook?",
    options: [
      "To manage component state",
      "To memoize function references to prevent unnecessary re-renders",
      "To handle side effects",
      "To create custom components"
    ],
    correctAnswerIndex: 1,
    explanation: "useCallback returns a memoized version of the callback function that only changes if one of its dependencies changes, preventing unnecessary re-renders of child components.",
    concept: "Function Memoization",
    usedIn: "Optimizing event handlers in quiz components",
    category: "react"
  },
  {
    id: 47,
    question: "What is a Git tag?",
    options: [
      "A branch name",
      "A reference to a specific commit, often used for releases",
      "A commit message",
      "A remote repository"
    ],
    correctAnswerIndex: 1,
    explanation: "A Git tag is a reference to a specific commit, typically used to mark release points (v1.0, v2.0, etc.). Tags are immutable references unlike branches.",
    concept: "Tagging Releases",
    usedIn: "Marking stable versions of the quiz app",
    category: "git"
  },
  {
    id: 48,
    question: "Which TypeScript utility type makes all properties of a type optional?",
    options: [
      "Required<T>",
      "Partial<T>",
      "Pick<T, K>",
      "Omit<T, K>"
    ],
    correctAnswerIndex: 1,
    explanation: "Partial<T> is a utility type that makes all properties of type T optional, useful when you want to create objects with only some properties set.",
    concept: "Utility Types",
    usedIn: "Creating flexible component prop interfaces",
    category: "typescript"
  },
  {
    id: 49,
    question: "What does 'npm start' typically do in a React project?",
    options: [
      "Installs dependencies",
      "Starts the development server",
      "Builds the project for production",
      "Runs tests"
    ],
    correctAnswerIndex: 1,
    explanation: "npm start runs the start script defined in package.json, which typically starts the development server for local development and testing.",
    concept: "Development Server",
    usedIn: "Running the quiz app locally during development",
    category: "development"
  },
  {
    id: 50,
    question: "What is the difference between 'git fetch' and 'git pull'?",
    options: [
      "No difference, they do the same thing",
      "fetch downloads changes but doesn't merge, pull downloads and merges",
      "fetch is for branches, pull is for commits",
      "fetch is slower than pull"
    ],
    correctAnswerIndex: 1,
    explanation: "git fetch downloads changes from the remote repository but doesn't merge them into your working branch. git pull does both fetch and merge in one command.",
    concept: "Fetching vs Pulling",
    usedIn: "Safely reviewing remote changes before merging",
    category: "git"
  },
  {
    id: 51,
    question: "What is React Context used for?",
    options: [
      "Managing component lifecycle",
      "Sharing state across multiple components without prop drilling",
      "Handling form submissions",
      "Creating animations"
    ],
    correctAnswerIndex: 1,
    explanation: "React Context provides a way to pass data through the component tree without having to pass props down manually at every level, solving the prop drilling problem.",
    concept: "Context API",
    usedIn: "Sharing quiz state across multiple components",
    category: "react"
  },
  {
    id: 52,
    question: "What is the purpose of environment variables?",
    options: [
      "To store code",
      "To configure application behavior without changing code",
      "To manage Git repositories",
      "To compile TypeScript"
    ],
    correctAnswerIndex: 1,
    explanation: "Environment variables allow you to configure your application for different environments (development, staging, production) without modifying the source code.",
    concept: "Environment Configuration",
    usedIn: "Configuring API endpoints and deployment settings",
    category: "development"
  }
];
