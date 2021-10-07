import { createContext, useState } from "react";

export const ProgressContex = createContext(0)

export const ProgressContexProvider = ({children}) =>{

    const [progressLevel, setProgressLevel] = useState(0)

    return(
        <ProgressContex.Provider value={{
            progressLevel,
            setProgressLevel
        }}>
            {children}
        </ProgressContex.Provider>
    )
}