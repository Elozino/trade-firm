import React, { createContext } from "react";

export const StateContext = createContext("");

const Provider = ({ children }) => {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};

export default Provider;
