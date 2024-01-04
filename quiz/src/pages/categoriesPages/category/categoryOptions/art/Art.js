import React, { useState, useEffect } from 'react';
import Back from '../../../../../components/Back';
import { Data } from '../../../../../data/Data';
import './Art.css'

const Art = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("")

  const artQuestions = Data.filter(question => question.category === "art")
  const buttons = document.querySelectorAll('.answer-option-btn')

  const btnOptionsInitialState = () => {
    const btnOne = buttons[0]
    const btnTwo = buttons[1]
    const btnThree = buttons[2]
    const btnFour = buttons[3]
    
    btnOne.style.backgroundColor = 'blue'
    btnTwo.style.backgroundColor = 'blue'
    btnThree.style.backgroundColor = 'blue'
    btnFour.style.backgroundColor = 'blue'
  }

  const handleAnswerOptionClick = (e, isCorrect) => {
    const optionTarget = e.target

    if (isCorrect) {
      optionTarget.style.backgroundColor = 'green'
      setScore(score + 1);
    } else {
      optionTarget.style.backgroundColor = 'red'
    }
    setTimeout(callNextQuestion, 1000)
  };

  const callNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < artQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      <button className='.btn-sucess'>Tentar Novamente</button>
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

  
  console.log(artQuestions)
  

  return (
    <div className='quiz'>
      <Back />
      <div className='category-title title-art'></div>
      {showScore ? (
        <div className='score-section'>
          <p>Você acertou {score} de {artQuestions.length} perguntas!</p>
          <p>{resultMessage}</p>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{artQuestions.length}
            </div>
            <h3 className='question-text'>{artQuestions[currentQuestion].questionText}</h3>
          </div>
          <div className='answer-section'>
            {artQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className='answer-option-btn art' key={index} onClick={(e) => handleAnswerOptionClick(e, answerOption.isCorrect)}>
              {answerOption.answerText}
            </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Art;
