import React, { useReducer, createContext, useContext} from 'react';

export const BookContext = createContext();

const useAppContext = () => {
    return useContext(BookContext);
}

const InitialStateContextReducer = {
    viewCarrito: false
}

const contextReducer = (state, action) => {
    switch (action.type) {
        case 'MOSTRAR_CARRITO': {
            return {viewCarrito: !state.viewCarrito }
        }
        default: 
        return state
    }
}

const AppContextProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(contextReducer, InitialStateContextReducer);

    return (
        <BookContext.Provider value={{viewCarrito: state.viewCarrito, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export { AppContextProvider, useAppContext };
