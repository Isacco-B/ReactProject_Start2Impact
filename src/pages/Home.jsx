import React from "react";
import RecipeList from "../components/RecipeList";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <main className="container">
      <SearchForm />
      <RecipeList />
    </main>
  );
}
export default Home;
