import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = () => {
    setCurrentPage((currentPage) => {
      if (currentPage < 5) {
        return currentPage + 1;
      } else {
        return 1;
      }
    });
  };
  return (
    <AppContext.Provider value={{ currentPage, changePage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
