import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=12&diet=vegetarian&addRecipeInformation=true&query=`;

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [recipe, setRecipe] = useState([]);

  async function fetchRecipe() {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { results } = data;
      console.log(data)
      if (results) {
        const newRecipe = results.map((item) => {
          const { id, image, title, summary } = item;
          return { id, image, title, summary };
        });
        setRecipe(newRecipe);
      } else {
        setRecipe([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipe();
  }, [searchTerm]);

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

export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
