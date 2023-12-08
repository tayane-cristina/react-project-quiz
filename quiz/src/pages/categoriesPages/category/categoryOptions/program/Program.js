import {useReducer, useState} from 'react';

const initialState = {
  correct: 0,
  incorrect: 0,
  score: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CORRECT' :
        return {
          correct: state.correct + 1,
          incorrect: state.incorrect,
          score: state.score + 10
        };

        case 'INCORRECT' :
        return {
          correct: state.correct,
          incorrect: state.incorrect + 1,
          score: state.score
        };

        default :
        return state
    }
  };

const Program = () => {
   

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleAnswer = (answer, event) => {
        event.preventDefault();


        if (answer === 'CORRECT') {
            dispatch({type: 'CORRECT'})
        } else {
          dispatch({type: "INCORRECT"})
        }
    }
    
  return (
    <div>
      <h2>Programação</h2>
      <p><strong>Score: </strong>{state.score}</p>
      <p><strong>Acerto: {state.correct} - Erro: {state.incorrect}</strong></p>

        <ul>
          <li className='li-question-answer'>
            <span className='question'>1 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>2 - Qual desses não é um tipo de variável em JavaScript?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>let</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>var</button>
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>int</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>const</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>3 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>4 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>5 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>6 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>7 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>8 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>9 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>

          <li className='li-question-answer'>
            <span className='question'>10 - Qual é a linguagem de programação mais utilizada para desenvolvimento web?</span>
        
            <button className='answer-option' onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
            <button className='answer-option' onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
          </li>
        </ul>
        

    </div>
  );
}

export default Program;