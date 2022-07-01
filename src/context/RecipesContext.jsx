import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState('');

  const context = {
    setSearchResults,
    searchResults,
    filter,
    setFilter,
  };

  return (
    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
}
