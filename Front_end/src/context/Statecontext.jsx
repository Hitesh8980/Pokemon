import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <StateContext.Provider value={{
      searchQuery, setSearchQuery,
      selectedTypes, setSelectedTypes,
      currentPage, setCurrentPage
    }}>
      {children}
    </StateContext.Provider>
  );
};
