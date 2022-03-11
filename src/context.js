import { default as formSetup } from "./utils/formSetup.js";
import React, { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import localData from "./localData";
export const Context = createContext();

export default function Provider({ children }) {
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [state, setState] = useState({
        fetchedData: null,
        localData,
        location,
    });

    useEffect(() => {
        setState((state) => ({ ...state, location }));
    }, [location]);

    return (
        <Context.Provider
            value={{
                state,
                ...state,
                setState,
                isLoggedIn,
                setIsLoggedIn,
                ...formSetup
            }}
        >
            {children}
        </Context.Provider>
    );
}
