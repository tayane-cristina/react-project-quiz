// src/Quiz.js
import React, { useState } from 'react';
import { Data } from '../../../../../data/Data';

const Program = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      <div className='category-title'>
        <h2 className=''>Programação</h2>
      </div>
      {showScore ? (
        <div className='score-section'>
          <p>Você acertou {score} de {Data.length} perguntas!</p>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{Data.length}
            </div>
            <h2 className='question-text'>{Data[currentQuestion].questionText}</h2>
          </div>
          <div className='answer-section'>
            {Data[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className='answer-option-btn' key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Program;