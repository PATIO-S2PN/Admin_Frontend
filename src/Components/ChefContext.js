import React, { createContext, useState } from 'react';

export const ChefContext = createContext();

export const ChefProvider = ({ children }) => {
  const [chefs, setChefs] = useState([]);

  const addChef = (chef) => {
    setChefs([...chefs, chef]);
  };

  const updateChef = (updatedChef) => {
    setChefs(chefs.map(chef => (chef._id === updatedChef._id ? updatedChef : chef)));
  };

  return (
    <ChefContext.Provider value={{ chefs, setChefs, addChef, updateChef }}>
      {children}
    </ChefContext.Provider>
  );
};
