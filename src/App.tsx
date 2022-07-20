import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the git command that downloads your repository from GitHub to your computer?",
      options: [
        { id: 0, text: "git push", isCorrect: false },
        { id: 1, text: "git commit", isCorrect: false },
        { id: 2, text: "git fork", isCorrect: false },
        { id: 3, text: "git clone", isCorrect: true },
      ],
    },
    {
      text: "What command is used to upload your code and changes to GitHub",
      options: [
        { id: 0, text: "git push", isCorrect: true },
        { id: 1, text: "git status", isCorrect: false },
        { id: 2, text: "git add", isCorrect: false },
        { id: 3, text: "git upload", isCorrect: false },
      ],
    },
    {
      text: "How to initialize the local repository with git?",
      options: [
        { id: 0, text: "git start", isCorrect: false },
        { id: 1, text: "git init", isCorrect: true },
        { id: 2, text: "git pull", isCorrect: false },
        { id: 3, text: "git clean", isCorrect: false },
      ],
    },
    {
      text: "How do i get code from another repository on GitHub?",
      options: [
        { id: 0, text: "git pull-request", isCorrect: false },
        { id: 1, text: "Forking through the GitHub interface", isCorrect: true },
        { id: 2, text: "git clone", isCorrect: false },
        { id: 3, text: "git fork", isCorrect: false },
      ],
    },
    {
      text: "How to check the status of your local repository since your last commit?",
      options: [
        { id: 0, text: "git check", isCorrect: false },
        { id: 1, text: "git commit", isCorrect: false },
        { id: 2, text: "git diff", isCorrect: false },
        { id: 3, text: "git status", isCorrect: true },
      ],
    },

    {
      text: "How do i add files to a commit?",
      options: [
        { id: 0, text: "git stage", isCorrect: false },
        { id: 1, text: "git commit", isCorrect: false },
        { id: 2, text: "git add", isCorrect: true },
        { id: 3, text: "git reset", isCorrect: false },
      ],
    },

    {
      text: "How to save the current state of your code in git?",
      options: [
        { id: 0, text: "By validating the modifications staged with $git commit", isCorrect: true },
        { id: 1, text: "By adding all the changes and staging them with $git stage", isCorrect: false },
        { id: 2, text: "By adding all the changes and organizing them with $git add", isCorrect: false },
        { id: 3, text: "By creating a new commit with $git init", isCorrect: false },
      ],
    },

    {
      text: "What shortcut to stage all the changes you have?",
      options: [
        { id: 0, text: "git push -am 'Message'", isCorrect: false },
        { id: 1, text: "git commit add", isCorrect: false },
        { id: 2, text: "git commit", isCorrect: true },
        { id: 3, text: "git add", isCorrect: false },
      ],
    },

    {
      text: "Which command you see to check the history of your repository?",
      options: [
        { id: 0, text: "git checkout", isCorrect: false },
        { id: 1, text: "git fetch", isCorrect: false },
        { id: 2, text: "git log", isCorrect: true },
        { id: 3, text: "git diff", isCorrect: false },
      ],
    },

    {
      text: "Which command will let you know who modified a file?",
      options: [
        { id: 0, text: "git blame", isCorrect: true },
        { id: 1, text: "git diff", isCorrect: false },
        { id: 2, text: "git log", isCorrect: false },
        { id: 3, text: "git log -source", isCorrect: false },
      ],
    },

    {
      text: "Which command will run the app in the development mode?",
      options: [
        { id: 0, text: "npm test", isCorrect: false },
        { id: 1, text: "npm start", isCorrect: true },
        { id: 2, text: "npm  run build", isCorrect: false },
        { id: 3, text: "npm run eject", isCorrect: false },
      ],
    },

    {
      text: "Which command launches the test runner in the interactive watch mode",
      options: [
        { id: 0, text: "npm run eject", isCorrect: false },
        { id: 1, text: "npm test", isCorrect: true },
        { id: 2, text: "npm run build", isCorrect: false },
        { id: 3, text: "npm start", isCorrect: false },
      ],
    },

    {
      text: "Which command builds the app for production to the build folder?",
      options: [
        { id: 0, text: "npm start", isCorrect: false },
        { id: 1, text: "npm run eject", isCorrect: false },
        { id: 2, text: "npm test", isCorrect: false },
        { id: 3, text: "npm run build", isCorrect: true },
      ],
    },

    {
      text: "Which command will remove the single build dependency from your project?",
      options: [
        { id: 0, text: "npm run build", isCorrect: false },
        { id: 1, text: "npm start", isCorrect: false },
        { id: 2, text: "npm run eject", isCorrect: true },
        { id: 3, text: "npm test", isCorrect: false },
      ],
    },

    {
      text: "Which command checks the registry if any (or specified) package is outdated?",
      options: [
        { id: 0, text: "npm version", isCorrect: false },
        { id: 1, text: "npm outdated", isCorrect: true },
        { id: 2, text: "npm init", isCorrect: false },
        { id: 3, text: "npm ls", isCorrect: false },
      ],
    },

    {
      text: "Which command searches the npm registry for packages matching the search terms?",
      options: [
        { id: 0, text: "npm search", isCorrect: true },
        { id: 1, text: "npm ls", isCorrect: false },
        { id: 2, text: "npm outdated", isCorrect: false },
        { id: 3, text: "npm init", isCorrect: false },
      ],
    },

    {
      text: "Which command is used for installing the third party modules in our current directory",
      options: [
        { id: 0, text: "npm test", isCorrect: false },
        { id: 1, text: "npm update", isCorrect: false },
        { id: 2, text: "npm outdated", isCorrect: false },
        { id: 3, text: "npm install", isCorrect: true },
      ],
    },

    {
      text: "which command lists all the packages as well as their dependencies installed.",
      options: [
        { id: 0, text: "npm version", isCorrect: false },
        { id: 1, text: "npm test", isCorrect: false },
        { id: 2, text: "npm ls", isCorrect: true },
        { id: 3, text: "npm doctor", isCorrect: false },
      ],
    },

    {
      text: "which command is used to show data about a package and print it to the screen?",
      options: [
        { id: 0, text: "npm publish", isCorrect: false },
        { id: 1, text: "npm stop", isCorrect: false },
        { id: 2, text: "npm run", isCorrect: false },
        { id: 3, text: "npm view", isCorrect: true },
      ],
    },


    {
      text: "Which command uninstalls a package that is already installed?",
      options: [
        { id: 0, text: "npm install", isCorrect: false },
        { id: 1, text: "npm audit", isCorrect: false },
        { id: 2, text: "npm ddp", isCorrect: false },
        { id: 3, text: "npm uninstall", isCorrect: true },
      ],
    },

    {
      text: "TypeScript is a ?",
      options: [
        { id: 0, text: "compiled language", isCorrect: false },
        { id: 1, text: "object oriented", isCorrect: false },
        { id: 2, text: "strongly typed", isCorrect: false },
        { id: 3, text: "all of the above", isCorrect: true },
      ],
    },

    {
      text: "Typescript supports Object Oriented Programming concepts like classes, interfaces",
      options: [
        { id: 0, text: "False", isCorrect: false },
        { id: 1, text: "True", isCorrect: true },
        { id: 2, text: "can not say", isCorrect: false },
        { id: 3, text: "can be true or false", isCorrect: false },
      ],
    },

    {
      text: "TypeScript is ?",
      options: [
        { id: 0, text: "case-senstitive", isCorrect: true },
        { id: 1, text: "can not say", isCorrect: false },
        { id: 2, text: "case-insensitive", isCorrect: false },
        { id: 3, text: "depends on typescript version", isCorrect: false },
      ],
    },

    {
      text: "TypeScript supports how many types of comments?",
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "2", isCorrect: true },
      ],
    },

    {
      text: "Are semicolons optional in TypeScript?",
      options: [
        { id: 0, text: "can not say", isCorrect: false },
        { id: 1, text: "yes", isCorrect: true },
        { id: 2, text: "can be yes or no", isCorrect: false },
        { id: 3, text: "no", isCorrect: false },
      ],
    },

    {
      text: "How many components typescript has?",
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "5", isCorrect: false },
      ],
    },

    {
      text: "Extension of typescript is?",
      options: [
        { id: 0, text: "d.ty", isCorrect: false },
        { id: 1, text: "d.tp", isCorrect: false },
        { id: 2, text: "d.ts", isCorrect: false },
        { id: 3, text: "d.td", isCorrect: true },
      ],
    },

    {
      text: "Which is not true about typescript?",
      options: [
        { id: 0, text: "It is interpreted like JavaScript", isCorrect: false },
        { id: 1, text: "It is a superset of javascript", isCorrect: false },
        { id: 2, text: "It does not support static data types", isCorrect: true },
        { id: 3, text: "It is case-sensitive", isCorrect: false },
      ],
    },

    {
      text: "..... are the way to organize code in typescript.",
      options: [
        { id: 0, text: "Modules", isCorrect: true},
        { id: 1, text: "Classes", isCorrect: false },
        { id: 2, text: "Method", isCorrect: false },
        { id: 3, text: "Arrow", isCorrect: false },
      ],
    },

    {
      text: "What does CircleCI stand for?",
      options: [
        { id: 0, text: "continuos internet & delivery platform", isCorrect: false },
        { id: 1, text: "circle intergration & delivery platform", isCorrect: false },
        { id: 2, text: "continuous internet", isCorrect: false },
        { id: 3, text: "continuous integration & delivery platform", isCorrect: true },
      ],
    },

    {
      text: "What is config yml file?",
      options: [
        { id: 0, text: "file that  contains a sequence of machine-readable instructions that is processed by the CPU in a computer.", isCorrect: false },
        { id: 1, text: "file that contains all the configuration settings that are needed to deploy your cluster", isCorrect: true },
        { id: 2, text: "file that  contains letters, numbers, symbols and/or a combination", isCorrect: false },
        { id: 3, text: "a file format for storing digital audio data on a computer system", isCorrect: false },
      ],
    },

    {
      text: "What is TDD in full?",
      options: [
        { id: 0, text: "Task-driven Development", isCorrect: false },
        { id: 1, text: "Test-driven Development", isCorrect: true },
        { id: 2, text: "Training-disk Development", isCorrect: false },
        { id: 3, text: "Test-drive Development", isCorrect: false },
      ],
    },

    {
      text: "What is TDD?",
      options: [
        { id: 0, text: "a software development idea that is designed to test an application's behavior from the end user's standpoint", isCorrect: false },
        { id: 1, text: "a software development practice that focuses on creating unit test cases before developing the actual code", isCorrect: true },
        { id: 2, text: "a software development methodology that is about software design", isCorrect: false },
        { id: 3, text: "a software development practice that focuses on the designing of test cases, and also if the test will execute properly or not to meet the specified requirements", isCorrect: false },
      ],
    },

    {
      text: "What is Heroku?",
      options: [
        { id: 0, text: "an interconnected system of public webpages accessible through the Internet", isCorrect: false },
        { id: 1, text: "servers that are accessed over the Internet, and the software and databases that run on those servers", isCorrect: false },
        { id: 2, text: "a global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.", isCorrect: false },
        { id: 3, text: "a cloud platform as a service supporting several programming languages", isCorrect: true },
      ],
    },

    {
      text: "Which command login Heroku?",
      options: [
        { id: 0, text: "heroku apps", isCorrect: false },
        { id: 1, text: "heroku restart --app AppName", isCorrect: false },
        { id: 2, text: "heroku login", isCorrect: true },
        { id: 3, text: "heroku login apps", isCorrect: false},
      ],
    },

    {
      text: "Which command List apps?",
      options: [
        { id: 0, text: "heroku logs --app AppName", isCorrect: false },
        { id: 1, text: "heroku login", isCorrect: false },
        { id: 2, text: "heroku logs --app AppName -t", isCorrect: false },
        { id: 3, text: "heroku apps", isCorrect: true },
      ],
    },

    {
      text: "Which command Show an app domains?",
      options: [
        { id: 0, text: "heroku restart --app AppName", isCorrect: false },
        { id: 1, text: "heroku logs --app AppName", isCorrect: false },
        { id: 2, text: "heroku apps", isCorrect: false },
        { id: 3, text: "heroku domains --app AppName", isCorrect: true },
      ],
    },

    {
      text: "Which command Restart an app?",
      options: [
        { id: 0, text: "heroku apps", isCorrect: false },
        { id: 1, text: "heroku restart --app AppName", isCorrect: true },
        { id: 2, text: "heroku logs --app AppName", isCorrect: false },
        { id: 3, text: "heroku login", isCorrect: false },
      ],
    },

    {
      text: "Which command Tail logs?",
      options: [
        { id: 0, text: "heroku apps", isCorrect: false },
        { id: 1, text:  "heroku restart --app AppName", isCorrect: false },
        { id: 2, text: "heroku logs --app AppName -t", isCorrect: true },
        { id: 3, text: "heroku logs --app AppName", isCorrect: false },
      ],
    },

    {
      text: "What does Git stand for?",
      options: [
        { id: 0, text: "Global in technology", isCorrect: false },
        { id: 1, text: "Good internet technology", isCorrect: false },
        { id: 2, text: "Global internet tracker", isCorrect: false },
        { id: 3, text: "Global Information Tracker", isCorrect: true },
      ],
    },

    {
      text: "What is Git?",
      options: [
        { id: 0, text: "a family of wireless network protocols", isCorrect: false },
        { id: 1, text: " a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.", isCorrect: true },
        { id: 2, text: "a global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.", isCorrect: false },
        { id: 3, text: "a device that connects two or more packet-switched networks or subnetworks.", isCorrect: false },
      ],
    },

    {
      text: "Is Git a programming language?",
      options: [
        { id: 0, text: "yes", isCorrect: false },
        { id: 1, text: "no", isCorrect: true },
        { id: 2, text: "not sure", isCorrect: false },
        { id: 3, text: "can be or not", isCorrect: false },
      ],
    },

    {
      text: "Which command creates new application?",
      options: [
        { id: 0, text: "heroku --version", isCorrect: false },
        { id: 1, text: "heroku login -i", isCorrect: true },
        { id: 2, text: "heroku apps", isCorrect: false },
        { id: 3, text: "heroku create NAME_APP", isCorrect: true },
      ],
    },

    {
      text: "Which command  deletes a plugin,",
      options: [
        { id: 0, text: "heroku plugins:uninstall NAME_PLUGIN", isCorrect: true },
        { id: 1, text: "heroku info NAME_APP", isCorrect: false },
        { id: 2, text: "heroku run bash -a NAME_APP", isCorrect: false },
        { id: 3, text: "heroku open --app NAME_APP", isCorrect: false },
      ],
    },

    {
      text: "Which command shows information about the application",
      options: [
        { id: 0, text: "heroku open --app NAME_APP", isCorrect: false },
        { id: 1, text: "heroku info NAME_APP", isCorrect: true },
        { id: 2, text: "heroku logs --tail --app NAME_APP", isCorrect: false },
        { id: 3, text: "heroku run bash -a NAME_APP", isCorrect: false },
      ],
    },

    {
      text: "Which command sees all the environment properties of the application",
      options: [
        { id: 0, text: "heroku restart --app NAME_APP", isCorrect: false },
        { id: 1, text: "heroku info NAME_APP", isCorrect: false },
        { id: 2, text: "heroku open --app NAME_APP", isCorrect: false },
        { id: 3, text: "heroku run printenv --app NAME_APP", isCorrect: true },
      ],
    },

    {
      text: "Which command sees the logs of the application,",
      options: [
        { id: 0, text: "heroku logs --tail --app NAME_APP", isCorrect: true },
        { id: 1, text: "heroku info NAME_APP", isCorrect: false },
        { id: 2, text: "heroku open --app NAME_APP", isCorrect: false },
        { id: 3, text: "heroku restart --app NAME_APP", isCorrect: false },
      ],
    },

    {
      text: "Which command sees the list of installed add-ons",
      options: [
        { id: 0, text: "heroku run bash -a NAME_APP", isCorrect: false },
        { id: 1, text: "heroku config --app NAME_APP", isCorrect: false },
        { id: 2, text: "heroku addons", isCorrect: true },
        { id: 3, text: "heroku ps --app NAME_APP", isCorrect: false },
      ],
    },

    {
      text: "Which command sees the content of the Procfile of the currently deployed application",
      options: [
        { id: 0, text: "heroku config --app NAME_APP", isCorrect: false },
        { id: 1, text: "heroku plugins", isCorrect: false },
        { id: 2, text: "heroku run bash -a NAME_APP", isCorrect: false },
        { id: 3, text: "heroku ps --app NAME_APP", isCorrect: true },
      ],
    },

    {
      text: "Which command deletes an add-on with an alias ALIAS_ADD_ON",
      options: [
        { id: 0, text: "heroku plugins", isCorrect: false },
        { id: 1, text: "heroku run bash -a NAME_APP", isCorrect: false },
        { id: 2, text: "heroku ps --app NAME_APP", isCorrect: false },
        { id: 3, text: "heroku addons:destroy ALIAS_ADD_ON --confirm NAME_APP", isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect: boolean) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>QUIZ APPLICATION BY MARTHA!</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>

          <p>QUESTION 1
            Summary: The git clone command is used to create a copy of a specific repository or branch within a repository.
            Cloning a repository is typically only done once, at the beginning of your interaction with a project. Once a repository already exists on a remote, like on GitHub, then you would clone that repository so you could interact with it locally. Once you have cloned a repository, you won't need to clone it again to do regular development.
          </p>
          <p>QUESTION 2
            Summary: The git push command is used to upload local repository content to a remote repository.
          </p>
          <p>QUESTION 3
            Summary: The git init command is used to create a new blank repository. It is used to make an existing project as a Git project
          </p>
          <p>QUESTION 4
            Summary: A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.
          </p>
          <p>QUESTION 5
            Summary:The git status command displays the state of the working directory and the staging area
          </p>
          <p>QUESTION 6
            Summary:The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit .
          </p>
          <p>QUESTION 7
            Summary: The git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.
          </p>
          <p>QUESTION 8
            Summary: git commit creates a commit, which is like a snapshot of your repository.
          </p>
          <p>QUESTION 9
            Summary: Git log is a utility tool to review and read a history of everything that happens to a repository
          </p>
          <p>QUESTION 10
            Summary: The git blame command is used to examine the contents of a file line by line and see when each line was last modified and who the author of the modifications was. The output format of git blame can be altered with various command line options.
          </p>
          <p>QUESTION 11
            Summary: npm start script is used to execute the defined file in it without typing its execution command.
          </p>
          <p>QUESTION 12
            Summary: What is npm test command?
The test command is the command that is run whenever you call npm test . This is important when integrating with continuous integration/continuous deployment tools (such as jenkins , codeship , teamcity )
          </p>
          <p>QUESTION 13
            Summary: npm run build creates a build directory with a production build of your app.
          </p>
          <p>QUESTION 14
            Summary: npm run eject -This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in package.
          </p>
          <p>QUESTION 15
            Summary: npm outdated This command will check the registry to see if any (or, specific) installed packages are currently outdated.
By default, only the direct dependencies of the root project and direct dependencies of your configured workspaces are shown.
          </p>
          <p>QUESTION 16
            Summary: npm search performs a linear, incremental, lexically-ordered search through package metadata for all files in the registry. If your terminal has color support, it will further highlight the matches in the results
          </p>
          <p>QUESTION 17
            Summary: npm install This command installs a package and any packages that it depends on. If the package has a package-lock, or an npm shrinkwrap file, or a yarn lock file, the installation of dependencies will be driven by that, respecting the following order of precedence:
npm-shrinkwrap.json
package-lock.json
yarn.lock
          </p>
          <p>QUESTION 18
            Summary: npm ls This command will print to stdout all the versions of packages that are installed, as well as their dependencies when --all is specified, in a tree structure.
          </p>
          <p>QUESTION 19
            Summary:npm view -This command shows data about a package and prints it to stdout.
          </p>
          <p>QUESTION 20
            Summary:npm uninstall -This uninstalls a package, completely removing everything npm installed on its behalf.
It also removes the package from the dependencies, devDependencies, optionalDependencies, and peerDependencies objects in your package.json.
          </p>
          <p>QUESTION 21
            Summary: TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft.
          </p>
          <p>QUESTION 22
            Summary: TypeScript supports Object Oriented Programming concepts like classes, interfaces, inheritance.
          </p>
          <p>QUESTION 23
            Summary: TypeScript is case-sensitive. This means that TypeScript differentiates between uppercase and lowercase characters. 
          </p>
          <p>QUESTION 24
            Summary: TypeScript supports the following types of comments : Single-line comments And Multi-line comments.
          </p>
          <p>QUESTION 25
            Summary: Yes, Semicolons are optional in TypeScript.
          </p>
          <p>QUESTION 26
            Summary: At its heart, TypeScript has the following three components : Language, The TypeScript Compiler and The TypeScript Language Service.
          </p>
          <p>QUESTION 27
            Summary: TypeScript Definition file (with .d.ts extension) provides definition for external JavaScript libraries.
          </p>
          <p>QUESTION 28
            Summary: We can create a static type with type annotations with TypeScript. The most basic data types in TypeScript are static types. We can annotate variables and parameters with data type annotations to make our assumptions explicit
          </p>
          <p>QUESTION 29
            Summary: TypeScript provides modules and namespaces in order to prevent the default global scope of the code and also to organize and maintain a large code base. Modules are a way to create a local scope in the file. So, all variables, classes, functions, etc. that are declared in a module are not accessible outside the module.
          </p>
          <p>QUESTION 30
            Summary: CircleCI is the continuous integration & delivery platform that helps the development teams to release code rapidly and automate the build, test, and deploy. CircleCI can be configured to run very complex pipelines efficiently with caching, docker layer caching, resource classes and many more.
          </p>
          <p>QUESTION 31
            Summary: What is config yml?
The config. yaml file contains all the configuration settings that are needed to deploy your cluster. From the config. yaml file, you can customize your installation by using various parameters.
          </p>
          <p>QUESTION 32
            Summary: Test Driven Development (TDD)
          </p>
          <p>QUESTION 33
            Summary: Test-Driven Development (TDD) is an approach to automated software testing that involves writing a failing test before writing the production code to make it pass. TDD helps you develop a robust test suite to catch bugs, as well as guiding you to more modular, flexible code.
          </p>
          <p>QUESTION 34
            Summary: Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.
          </p>
          <p>QUESTION 35
            Summary: heroku login 	Login to account
          </p>
          <p>QUESTION 36
            Summary: heroku apps 	List apps
          </p>
          <p>QUESTION 37
            Summary: heroku domains --app AppName 	Show an app domains
          </p>
          <p>QUESTION 38
            Summary: heroku restart --app AppName 	Restart an app
          </p>
          <p>QUESTION 39
            Summary: heroku logs --app AppName -t 	Tail logs
          </p>
          <p>QUESTION 40
            Summary:Git stands for An acronym for Global Information Tracker,
          </p>
          <p>QUESTION 41
            Summary: What basically is Git?
Git is an Open Source Distributed Version Control System. Now that's a lot of words to define Git. Let me break it down and explain the wording: Control System: This basically means that Git is a content tracker.
          </p>
          <p>QUESTION 42
            Summary: Is Git a programming language?
Image result for git
Git is not a programming language, but it's become incredibly important for computer programmers working in almost any language you can name. Today, Git is the de facto standard for what's known as version control software
          </p>
          <p>QUESTION 43
            Summary: heroku create NAME_APP creates a new application
          </p>
          <p>QUESTION 44
            Summary: heroku plugins:uninstall NAME_PLUGIN deletes a plugin
          </p>
          <p>QUESTION 45
            Summary: heroku info NAME_APP shows information about the application
          </p>
          <p>QUESTION 46
            Summary: heroku run printenv --app NAME_APP sees all the environment properties of the application.
          </p>
          <p>QUESTION 47
            Summary: heroku logs --tail --app NAME_APP sees the logs of the application
          </p>
          <p>QUESTION 48
            Summary: heroku addons sees the list of installed add-ons.
          </p>
          <p>QUESTION 49
            Summary: heroku ps --app NAME_APP see the content of the Procfile of the currently deployed application.
          </p>
          <p>QUESTION 50
            Summary: heroku addons:destroy ALIAS_ADD_ON --confirm NAME_APP delete an add-on with an alias ALIAS_ADD_ON
          </p>

          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

