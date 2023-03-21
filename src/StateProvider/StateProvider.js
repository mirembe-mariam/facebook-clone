import React, { createContext, useContext, useReducer} from "react";//we are importing those three from react

export const StateContext = createContext();//preparing the data layer

export const StateProvider = ({ reducer, initialState, children }) => (//line 5-9 helps us to use a stateprovider wc wraps the app in it 
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);//we use the'useStateValue to pull anything frm the data layer