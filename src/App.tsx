import React, {useState} from 'react';
import logo from './aca.png';
import quizData from './quizData.json';
import './App.css';

function App() {
  
  const [currentQuestion, setCurrectQuestion] = useState(0)
  const [score, setCurrectScore] = useState(0)

  /*create an array of objects {the object name is 
    the question, the atributes are the answeres. 
    set the answers and set the all incorect to 
    false and correct to true}*/


    const handleAnswerClick = (correct: boolean) => {
      if (correct) {
        setCurrectScore(score + 1)
      }
      const nextQuestion = currentQuestion + 1 
      if (nextQuestion < quizData.length) {
        setCurrectQuestion(nextQuestion)
      } else {
        alert(`Quiz finished! Your score: ${score}/${quizData.length}`)
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />
        <p>
          ACA Quiz App
        </p>
        <a
          className="App-link"
          href="https://africacode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Love ACA
        </a>

        <div className="container">
          <div className="quiz-box">
            <div className="quiz-question">
              <h2>{quizData[currentQuestion].question}</h2>
            </div>
            <div className="quiz-options">
              <ul>
                {quizData[currentQuestion].answers.map((answer, index) => (
                  <li key={index} onClick={() => handleAnswerClick(answer.correct)}>
                    <div className="option">
                      <p> {answer.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header> 
    </div>
  );
}

export default App;
