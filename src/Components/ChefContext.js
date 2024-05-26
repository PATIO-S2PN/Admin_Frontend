import React, { createContext, useState } from 'react';

export const ChefContext = createContext();

export const ChefProvider = ({ children }) => {
  const [chefs, setChefs] = useState([]);

  const addChef = (newChef) => {
    setChefs([...chefs, newChef]);
  };

  return (
    <ChefContext.Provider value={{ chefs, addChef }}>
      {children}
    </ChefContext.Provider>
  );
};
