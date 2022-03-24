import { createContext, useState } from "react";

export const ContextStorage = createContext()

export const ContextGlobal = ({children}) => {
    const [dados, setDatos] = useState({nome: 'rodrigo', idade: 18})
    return(
        <ContextStorage.Provider value={{dados,setDatos}}>{children}</ContextStorage.Provider>
    )
}