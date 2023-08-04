// src/questions.ts

export const questions = [
    {
      question: 'What does "git" stand for?',
      options: ['Global Information Tracker', 'Global Integrated Terminal', 'Get It Together', 'Globally Installed Tools'],
      correctAnswer: 'Global Information Tracker',
    },
    {
      question: 'Which command is used to create a new branch in Git?',
      options: ['git branch', 'git commit', 'git clone', 'git new-branch'],
      correctAnswer: 'git branch',
    },
    {
      question: 'What is a "pull request" in GitHub?',
      options: [
        'A request to retrieve the latest changes from the remote repository',
        'A request to merge code changes from one branch to another',
        'A request to delete a branch',
        'A request to reset the repository to a previous state',
      ],
      correctAnswer: 'A request to merge code changes from one branch to another',
    },
    {
      question: 'What is the purpose of Continuous Integration (CI) in software development?',
      options: [
        'To automate the process of deploying software to production',
        'To automatically merge code changes into the main branch',
        'To continuously test and integrate code changes',
        'To manually review and approve code changes',
      ],
      correctAnswer: 'To continuously test and integrate code changes',
    },
    {
      question: 'Which platform is known for its serverless deployment and hosting?',
      options: ['Heroku', 'AWS Lambda', 'Vercel', 'Google Cloud Functions'],
      correctAnswer: 'Vercel',
    },
    {
      question: 'What is CircleCI?',
      options: [
        'A version control system',
        'A continuous integration and delivery platform',
        'A cloud hosting provider',
        'A programming language',
      ],
      correctAnswer: 'A continuous integration and delivery platform',
    },
    {
      question: 'What does the "CD" in "CI/CD" stand for?',
      options: ['Code Deployment', 'Continuous Development', 'Computer Design', 'Control Data'],
      correctAnswer: 'Code Deployment',
    },
    {
      question: 'Which Git command is used to stage changes for commit?',
      options: ['git stage', 'git add', 'git commit', 'git push'],
      correctAnswer: 'git add',
    },
    {
      question: 'What is a "workflow" in GitHub Actions?',
      options: [
        'A document describing the software development process',
        'A series of automated steps to build, test, and deploy code',
        'A formal document for code review',
        'A record of code changes in a repository',
      ],
      correctAnswer: 'A series of automated steps to build, test, and deploy code',
    },
    {
      question: 'Which GitHub feature is used to fix or enhance code in a separate branch?',
      options: ['Issue', 'Pull Request', 'Commit', 'Fork'],
      correctAnswer: 'Pull Request',
    },

    {
      question: 'What is the purpose of a ".gitignore" file?',
      options: [
        'To track changes made to the repository',
        'To store authentication credentials securely',
        'To list files and directories that should be excluded from version control',
        'To define the main branch of the repository',
      ],
      correctAnswer: 'To list files and directories that should be excluded from version control',
    },
    {
      question: 'In Git, what is a "merge conflict"?',
      options: [
        'A situation where two or more branches have the same name',
        'An error that occurs when creating a new branch',
        'A situation where there are conflicting changes in different branches',
        'A type of authentication error',
      ],
      correctAnswer: 'A situation where there are conflicting changes in different branches',
    },
    {
      question: 'What is the purpose of a "pre-commit hook" in Git?',
      options: [
        'To automatically commit changes to the repository',
        'To enforce code style and formatting before committing',
        'To create a new branch before committing changes',
        'To revert the last commit in the repository',
      ],
      correctAnswer: 'To enforce code style and formatting before committing',
    },
    {
      question: 'Which Vercel feature allows you to preview and test deployments before they are live?',
      options: ['Previews', 'Pre-deployment', 'Test Environments', 'Beta Deployments'],
      correctAnswer: 'Previews',
    },
    {
      question: 'What is the purpose of a "Vercel.json" configuration file?',
      options: [
        'To store API keys and secrets',
        'To specify build settings for a Vercel project',
        'To define the deployment target for a Vercel project',
        'To configure routing and redirects for a Vercel project',
      ],
      correctAnswer: 'To specify build settings for a Vercel project',
    },
    {
      question: 'Which CI/CD platform is often associated with deploying applications to Kubernetes?',
      options: ['Travis CI', 'Jenkins', 'GitLab CI/CD', 'CircleCI'],
      correctAnswer: 'Jenkins',
    },
    {
      question: 'What is the purpose of a "cache" step in a CI/CD pipeline?',
      options: [
        'To store database backups',
        'To optimize performance by storing build artifacts',
        'To synchronize code changes across multiple repositories',
        'To run security scans on code',
      ],
      correctAnswer: 'To optimize performance by storing build artifacts',
    },
    {
      question: 'What is the default branch name in Git?',
      options: ['main', 'master', 'default', 'primary'],
      correctAnswer: 'main',
    },
    {
      question: 'What is a "status check" in GitHub?',
      options: [
        'A check to verify the health of a user account',
        'A verification step before submitting a pull request',
        'A formal code review process',
        'A check for internet connectivity',
      ],
      correctAnswer: 'A verification step before submitting a pull request',
    },
    {
      question: 'Which CI/CD platform provides built-in support for parallel and distributed testing?',
      options: ['Travis CI', 'Jenkins', 'GitLab CI/CD', 'CircleCI'],
      correctAnswer: 'CircleCI',
    },
    {
        question: 'Which Git command is used to view the commit history?',
        options: ['git log', 'git status', 'git commit', 'git diff'],
        correctAnswer: 'git log',
      },
      {
        question: 'What is the purpose of a "webhook" in GitHub?',
        options: [
          'To automatically deploy code changes',
          'To trigger actions in response to events',
          'To secure API access to the repository',
          'To schedule regular backups',
        ],
        correctAnswer: 'To trigger actions in response to events',
      },
      {
        question: 'What is a "deployment pipeline" in the context of CI/CD?',
        options: [
          'A physical pipeline for delivering software to production',
          'A sequence of automated steps for building, testing, and deploying code changes',
          'A communication channel between developers and operations teams',
          'A tool for managing code repositories',
        ],
        correctAnswer: 'A sequence of automated steps for building, testing, and deploying code changes',
      },
      {
        question: 'Which command is used to deploy a Vercel project?',
        options: ['vercel deploy', 'vercel start', 'vercel run', 'vercel push'],
        correctAnswer: 'vercel deploy',
      },
      {
        question: 'What is a "pipeline" in CircleCI?',
        options: [
          'A series of automated steps for building, testing, and deploying code changes',
          'A tool for visualizing code changes over time',
          'A feature for managing multiple Git repositories',
          'A communication channel for team collaboration',
        ],
        correctAnswer: 'A series of automated steps for building, testing, and deploying code changes',
      },
      {
        question: 'What is a "conflict resolution" in Git?',
        options: [
          'A process of identifying issues in code',
          'A method for resolving disagreements between developers',
          'A feature for organizing code branches',
          'A tool for searching through commit history',
        ],
        correctAnswer: 'A method for resolving disagreements between developers',
      },
      {
        question: 'Which Vercel feature enables automatic deployments when code is pushed to a Git repository?',
        options: ['Auto Deploy', 'Vercel CI', 'Continuous Deployment', 'Push-to-Deploy'],
        correctAnswer: 'Auto Deploy',
      },
      {
        question: 'What is a "workflow" in CircleCI?',
        options: [
          'A graphical representation of code architecture',
          'A process for managing feature requests',
          'A sequence of automated jobs and steps',
          'A method for versioning code changes',
        ],
        correctAnswer: 'A sequence of automated jobs and steps',
      },
      {
        question: 'Which command is used to create a new tag in Git?',
        options: ['git tag', 'git commit', 'git branch', 'git add'],
        correctAnswer: 'git tag',
      },
      {
        question: 'What is the purpose of a "Docker image"?',
        options: [
          'To visualize code architecture',
          'To containerize and distribute applications',
          'To optimize website performance',
          'To generate API documentation',
        ],
        correctAnswer: 'To containerize and distribute applications',
      },
      {
        question: 'What is a "protected branch" in GitHub?',
        options: [
          'A branch that is visible to external contributors only',
          'A branch with restricted access for code changes',
          'A branch that is automatically merged into other branches',
          'A branch used for experimental features',
        ],
        correctAnswer: 'A branch with restricted access for code changes',
      },
      {
        question: 'In CircleCI, what is a "job"?',
        options: [
          'A version control system',
          'A sequence of automated steps in a workflow',
          'A graphical representation of code architecture',
          'A process for managing feature requests',
        ],
        correctAnswer: 'A sequence of automated steps in a workflow',
      },
      {
        question: 'What is a "pull request template" in GitHub?',
        options: [
          'A file that contains code for a new feature',
          'A template for requesting code reviews',
          'A template for setting up GitHub Actions',
          'A template for deploying code to production',
        ],
        correctAnswer: 'A template for requesting code reviews',
      },
      {
        question: 'Which Git command is used to create a new repository?',
        options: ['git init', 'git new', 'git create', 'git repo'],
        correctAnswer: 'git init',
      },
      {
        question: 'What is a "Vercel project"?',
        options: [
          'A collection of Docker containers',
          'A group of GitHub repositories',
          'A collection of files and code for a web application',
          'A package manager for JavaScript projects',
        ],
        correctAnswer: 'A collection of files and code for a web application',
      },
      {
        question: 'Which CI/CD platform offers a marketplace for integrations and plugins?',
        options: ['Travis CI', 'Jenkins', 'GitLab CI/CD', 'CircleCI'],
        correctAnswer: 'Jenkins',
      },
      {
        question: 'What is a "build artifact" in CI/CD?',
        options: [
          'A software library used for building applications',
          'A containerized application for testing',
          'A binary file generated from the build process',
          'A security scan report for code vulnerabilities',
        ],
        correctAnswer: 'A binary file generated from the build process',
      },
      {
        question: 'What is the purpose of a "fork" in GitHub?',
        options: [
          'To create a copy of a repository for personal use',
          'To merge code changes into the main branch',
          'To track changes made to the repository',
          'To deploy code to a production server',
        ],
        correctAnswer: 'To create a copy of a repository for personal use',
      },
      {
        question: 'What is a "pipeline" in GitLab CI/CD?',
        options: [
          'A communication channel for team collaboration',
          'A series of automated steps for building, testing, and deploying code changes',
          'A feature for managing multiple Git repositories',
          'A graphical representation of code architecture',
        ],
        correctAnswer: 'A series of automated steps for building, testing, and deploying code changes',
      },
      {
        question: 'Which CI/CD platform is known for its YAML configuration files?',
        options: ['Travis CI', 'Jenkins', 'GitLab CI/CD', 'CircleCI'],
        correctAnswer: 'GitLab CI/CD',
      },
      {
        question: 'What is a "git merge"?',
        options: [
          'A command to delete a branch',
          'A command to fetch the latest changes from the remote repository',
          'A command to combine changes from one branch into another',
          'A command to create a new branch',
        ],
        correctAnswer: 'A command to combine changes from one branch into another',
      },
      {
        question: 'In GitHub Actions, what is a "workflow"?',
        options: [
          'A communication channel for team collaboration',
          'A process for managing feature requests',
          'A sequence of automated jobs and steps',
          'A feature for tracking code changes',
        ],
        correctAnswer: 'A sequence of automated jobs and steps',
      },
      {
        question: 'What is a "code review" in GitHub?',
        options: [
          'A process for reviewing and approving code changes',
          'A method for automatically merging code changes',
          'A feature for running security scans on code',
          'A process for deleting code from the repository',
        ],
        correctAnswer: 'A process for reviewing and approving code changes',
      },
      {
        question: 'Which Git command is used to create a new branch and switch to it?',
        options: ['git create-branch', 'git branch', 'git checkout', 'git switch'],
        correctAnswer: 'git checkout',
      },
      {
        question: 'What is a "GitHub App"?',
        options: [
          'A standalone software application for GitHub',
          'A type of pull request',
          'A third-party integration with GitHub for automating tasks',
          'A feature for creating new repositories',
        ],
        correctAnswer: 'A third-party integration with GitHub for automating tasks',
      },
      {
        question: 'Which CI/CD platform is known for its "pipelines" and "stages"?',
        options: ['Travis CI', 'Jenkins', 'GitLab CI/CD', 'CircleCI'],
        correctAnswer: 'GitLab CI/CD',
      },
      {
        question: 'What is a "deployment" in CI/CD?',
        options: [
          'A process for updating server software',
          'A process for reviewing and approving code changes',
          'A process for delivering code changes to production',
          'A process for testing code changes',
        ],
        correctAnswer: 'A process for delivering code changes to production',
      },
      {
        question: 'What is a "repository" in Git?',
        options: [
          'A folder on a local machine',
          'A file that contains code for a new feature',
          'A remote storage location for code and files',
          'A version control system',
        ],
        correctAnswer: 'A remote storage location for code and files',
      },
      {
        question: 'What is a "runner" in GitHub Actions?',
        options: [
          'A tool for automatically merging code changes',
          'A software agent that runs jobs in workflows',
          'A type of GitHub repository',
          'A command-line tool for managing repositories',
        ],
        correctAnswer: 'A software agent that runs jobs in workflows',
      },
      {
        question: 'Which CI/CD platform offers "Orbs" for simplifying configuration?',
        options: ['Travis CI', 'Jenkins', 'GitLab CI/CD', 'CircleCI'],
        correctAnswer: 'CircleCI',
      },
  ];
  
  
  