import { createContext, useState } from 'react'

//CRIANDO UM CONTEXT
export const CounterContext = createContext()


//CRIANDO UM PROVIDER
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(1)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};