import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  function searchRecipe() {
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="search-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            ref={searchValue}
          />
          <button type="submit" className="btn" onClick={searchRecipe}>Search</button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
