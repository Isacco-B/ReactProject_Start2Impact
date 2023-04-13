import React from 'react'
import Recipe from './Recipe'
import Loading from './Loading'
import { useGlobalContext } from '../Context'

function RecipeList() {
    const {recipe,loading} = useGlobalContext()

    if (loading) {
        return <Loading/>
    }
    if (recipe.length < 1) {
        return <h2>No recipe Found</h2>
    }
    return <h1>recipe list</h1>
}


export default RecipeList
