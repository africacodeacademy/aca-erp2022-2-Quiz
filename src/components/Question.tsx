import React from 'react';
import '../components/Questions.css'
interface Props {
    question: string;
    choices: string[];
    answer: string;
    onAnswer: (answer: string) => void;
}
  
const Question: React.FC<Props> = (
    { question, choices, answer, onAnswer }) => {
    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
            <div className="option-list">
             
              {choices.map((choice,index) => (                     
            <ul key={index}>
              
            <label>
              <input
                type="radio"
                name="answer"
                value={choice}
                onChange={() => onAnswer(choice)}
              />
              {choice}
            </label>
            
          </ul>
                ))}
              
            
               
            </div>
        </div>
    );
};
  
export default Question;
