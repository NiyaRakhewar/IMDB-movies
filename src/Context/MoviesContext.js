import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reducer";
import { movies } from "../data/data";

export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "All_MOVIES", payload: movies });
  }, []);

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
