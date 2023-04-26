import React, { useState, useContext, useEffect } from "react";
import Loading from '../components/Loading';
import { useParams, Link} from 'react-router-dom'



function SingleRecipe() {
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

useEffect(()=>{
  setLoading(true);
  async function getRecipe() {
    const API = import.meta.env.VITE_API;
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}&includeNutrition=false`;
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      if (data) {
        
      }
      else {
        setRecipe(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  getRecipe();
},[id])





  return <h1>{id}</h1>;
}
export default SingleRecipe;
