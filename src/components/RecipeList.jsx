import React from "react";
import Recipe from "./Recipe";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

function RecipeList() {
  const { recipe, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (recipe.length < 1) {
    return <h2>No recipe matched yout reach criteria</h2>;
  }
  return (
    <section>
      <div className="recipe-container">
        {recipe.map((item) => {
          return <Recipe key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default RecipeList;
