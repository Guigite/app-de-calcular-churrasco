import React from "react";
import { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){
    let valor = 0;

    return(
        <MainContext.Provider value={{valor}}>
            {children}
        </MainContext.Provider>
    );
}