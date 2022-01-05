import React from "react";

////////////////////////
// INITIAL STATE
////////////////////////

const initialState = {
  // url: "https://nixoy-notes-backend.herokuapp.com",

  // http for local
  url: "http://nixoy-notes-backend.herokuapp.com",
};

////////////////////////
// REDUCER
////////////////////////
// action = {type: "". payload: ---}
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

////////////////////////
// AppContext
////////////////////////
const AppContext = React.createContext(null);

////////////////////////
// AppState Component
////////////////////////
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={(state, dispatch)}>
      {props.children}
    </AppContext.Provider>
  );
};

////////////////////////
// useAppState Hook
////////////////////////

export const useAppState = () => {
  return React.useContext(AppContext);
};
