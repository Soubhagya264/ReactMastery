import { createContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const component = {
        name: "React forms",
        version: "11.0.3",
        description: "React forms for handling user input",
      }
    return <AppContext.Provider value={component}>{children}</AppContext.Provider>
}

export  { AppContext, AppProvider };