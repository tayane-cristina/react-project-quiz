const btnOptionsInitialState = ({buttons}) => {
    const btnOne = buttons[0]
    const btnTwo = buttons[1]
    const btnThree = buttons[2]
    const btnFour = buttons[3]
    
    btnOne.style.backgroundColor = 'grey'
    btnTwo.style.backgroundColor = 'grey'
    btnThree.style.backgroundColor = 'grey'
    btnFour.style.backgroundColor = 'grey'
  };

const callNextQuestion = ({currentQuestion, programQuestions, setCurrentQuestion,setShowScore}) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < programQuestions.length) {
      btnOptionsInitialState()
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      //<button className='.btn-sucess' onClick={programQuestions}>Tentar Novamente</button>
    }
  };

  export default callNextQuestion;