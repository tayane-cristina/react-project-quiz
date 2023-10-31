import './ShowQuestions.css'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const ShowQuestion = () => {

    const { counter } = useContext(CounterContext)

    return (
        <div className="div-show-question">
            <span>Pergunta {counter}/10</span>
            <h2 className='question-show-question'>Pergunta</h2>
            <form className='form-show-question'>
                
                <label htmlFor="option-1">
                    <input type="radio" value="option-1" name='options'></input>
                    Opção 1
                </label>
                <label htmlFor="option-1">
                    <input type="radio" value="option-2" name='options'></input>
                    Opção 2
                </label>
                <label htmlFor="option-1">
                    <input type="radio" value="option-3" name='options'></input>
                    Opção 3
                </label>
                <label htmlFor="option-1">
                    <input type="radio" value="option-4" name='options'></input>
                    Opção 4
                </label>
                <div className='buttons'>
                    <button className='button-show-question send' type='submit'>Enviar resposta</button>
                    <button className='button-show-question next'type='button'>Próxima</button>
                </div>
                
            </form>
            
        </div>
    )

};
export default ShowQuestion;