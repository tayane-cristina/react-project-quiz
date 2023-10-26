import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CreateAQuiz = () => {

    const { counter } = useContext(CounterContext)

    return (
        <div>
            Criar {counter} quiz
        </div>
    )

};
export default CreateAQuiz;