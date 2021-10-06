import { createContext, useState } from "react";

export const ProgressContex = createContext(0)

export const ProgressContexProvider = ({children}) =>{

    const [progressLevel, useProgressLevel] = useState(0)

    return(
        <ProgressContex.Provider value={{
            progressLevel,
            useProgressLevel
        }}>
            {children}
        </ProgressContex.Provider>
    )
}