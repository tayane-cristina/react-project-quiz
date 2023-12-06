import {useReducer} from 'react';

    const reducer = (state, action) => {
        switch (action.type) {
            case 'CORRECT' :
            return {correct: state.correct + 1};

            default :
            return state
        }
    };

const Program = () => {
   

    const [state, dispatch] = useReducer(reducer, {correct: 0})

    const handleAnswer = (answer, event) => {
        event.preventDefault();

        if (answer === 'CORRECT') {
            dispatch({type: 'CORRECT'})
        } 
    }
    
  return (
    <div>
      <h2>Programação</h2>
      <span><strong>Score: </strong>{state.correct}</span>

      <form>
        <label>Qual é a linguagem de programação mais utilizada para desenvolvimento web?</label>
       <button onClick={(e) => handleAnswer('CORRECT', e)}>Javascript</button>
       <button onClick={(e) => handleAnswer('INCORRECT', e)}>C++</button>
       <button onClick={(e) => handleAnswer('INCORRECT', e)}>Phyton</button>
       <button onClick={(e) => handleAnswer('INCORRECT', e)}>Java</button>
      </form>
    </div>
  );
}

export default Program;