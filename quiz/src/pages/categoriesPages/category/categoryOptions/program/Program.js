// src/Quiz.js
import React, { useState } from 'react';

const questions = [
  {
    questionText: 'Qual é a capital do Brasil?',
    answerOptions: [
      { answerText: 'Rio de Janeiro', isCorrect: false },
      { answerText: 'Brasília', isCorrect: true },
      { answerText: 'São Paulo', isCorrect: false },
      { answerText: 'Salvador', isCorrect: false },
    ],
  },
  {
    questionText: 'Quem escreveu "Dom Quixote"?',
    answerOptions: [
      { answerText: 'Miguel de Cervantes', isCorrect: true },
      { answerText: 'William Shakespeare', isCorrect: false },
      { answerText: 'Friedrich Nietzsche', isCorrect: false },
      { answerText: 'Charles Dickens', isCorrect: false },
    ],
  },
  // Adicione mais perguntas aqui, seguindo o mesmo formato
];

const Program = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          <p>Você acertou {score} de {questions.length} perguntas!</p>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <h2 className='question-text'>{questions[currentQuestion].questionText}</h2>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
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