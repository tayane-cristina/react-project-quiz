import React, { useState, useEffect } from 'react';
import Back from '../../../../../components/Back';
import { Data } from '../../../../../data/Data';
import './History.css'

const History = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("")

  const historyQuestions = Data.filter(question => question.category === "history")

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < historyQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  
  useEffect(() => {
    const updateScore = score
    if (updateScore <= 3) {
      setResultMessage("Quando o assunto é esse, você e ele são quase como água e azeite - não se misturam muito, mas é sempre interessante ver a dinâmica! continue a estudar!")
      
    } else if (updateScore > 3 && updateScore <= 5) {
      setResultMessage('Você até está dando os primeiros passos nesse assunto, e com um pouco mais de exploração, tenho certeza de que você se tornará um mestre! Continue a estudar!')
      
    } else if (updateScore > 5 && updateScore <=8) {
      setResultMessage('Você está muito bem nesse assunto! Com mais um pouquinho de dedicação, você vai conquistar a excelência nesse tema. Continue assim, você está no caminho certo para se tornar um expert!') 
      
    } else {
      setResultMessage("Você é simplesmente incrível nesse assunto, um verdadeiro 10 de 10! Seu conhecimento é impressionante e inspirador. Continue assim, pois você é uma verdadeira referência nesse tema. Parabéns pelo domínio completo!") 
      
    }
  }, [score])

  
  console.log(historyQuestions)
  

  return (
    <div className='quiz'>
      <Back />
      <div className='category-title title-history'></div>
      {showScore ? (
        <div className='score-section'>
          <p>Você acertou {score} de {historyQuestions.length} perguntas!</p>
          <p>{resultMessage}</p>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{historyQuestions.length}
            </div>
            <h3 className='question-text'>{historyQuestions[currentQuestion].questionText}</h3>
          </div>
          <div className='answer-section'>
            {historyQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className='answer-option-btn history' key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
              {answerOption.answerText}
            </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default History;