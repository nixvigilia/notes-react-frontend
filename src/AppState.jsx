import React, { createContext, useReducer, useContext } from "react";

// INITIAL STATE
const initialState = {
  // url: "https://nixoy-notes-backend.herokuapp.com",

  // http for local
  url: "http://nixoy-notes-backend.herokuapp.com",
  token: null,
  username: null,
};

// REDUCER
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "auth":
      newState = { ...state, ...action.payload };
      return newState;
    default:
      return state;
  }
};

// AppContext
const AppContext = createContext(null);

// AppState Component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

// useAppState Hook
export const useAppState = () => {
  return useContext(AppContext);
};
