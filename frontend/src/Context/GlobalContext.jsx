import { createContext, useReducer } from "react";

export const MyContext = createContext()

const reducer = (state, action) => {

    switch (action.type) {
        case "Increment":
            return { ...state, count: state.count + 1 }
        case "Decrement":
            return { ...state, count: state.count - 1 }
        case "Reset":
            return { ...state, count: 0 }
        default:
            return state;
    }
}


const GlobalContext = ({ children }) => {

    const InitialState = { count: 1000 }
    
    const [state, dispatch] = useReducer(reducer, InitialState)

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}

export default GlobalContext;
