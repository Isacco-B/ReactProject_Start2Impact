import React, { useState, useContext, useEffect } from "react";


const url = `https://api.spoonacular.com/recipes/random?apiKey=&number=12&tags=vegetarian`;;
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [recipe, serRecipe] = useState([]);


  return (
    <AppContext.Provider
      value={{
        loading,
        recipe,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
