import { createContext } from "react";

export const ContextStorage = createContext()

export const ContextGlobal = ({children}) => {
    
    return(
        <ContextStorage.Provider value={{nome: 'Rodrigo'}}>{children}</ContextStorage.Provider>
    )
}