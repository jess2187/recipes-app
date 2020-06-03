import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const RecipeList = ({recipes, deleteRecipe}) => {
 
    // checks if there are any todos (if empty)
    const recipeList = recipes.length ? (
        recipes.map((recipe, index) => {
           return (
                <div className= 'collection-item' key={index}>
                    <button><Link to={'/'+recipe.name}>{recipe.name}</Link></button>
                    <button onClick={() => deleteRecipe(index)}> Delete </button>
                </div>
           )
       }) 
    ) : (
        <p className='center'> You have no recipes left </p>
    )
    return (
        <div className='todos collection'>
            <h1 className='center blue-text'>My Recipes</h1>
            {recipeList}
        </div>
    )
}

export default RecipeList
