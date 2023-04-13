import React from "react";
import { useGlobalContext } from "../Context"

function SearchForm() {
  const {setSearchTerm} = useGlobalContext()
  return <h1>search</h1>
}

export default SearchForm
