import { createContext } from "react";

export const ContextStorage = createContext()

export const ContextGlobal = ({children}) => {
    
    return(
        <ContextStorage.Provider value={{name: 'Rodrigo'}}>{children}</ContextStorage.Provider>
    )
}