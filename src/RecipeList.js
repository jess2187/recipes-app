import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const RecipeList = ({recipes, deleteRecipe}) => {
 
    // checks if there are any todos (if empty)
    const recipeList = recipes.length ? (
        recipes.map((recipe, index) => {
           return (
                <div className='Recipe' key={index}>
                    <button className='RecipeButton'><Link className='RecipeButtonLink' to={'/'+recipe.name}>{recipe.name}</Link></button>
                    <button className='DeleteButton'onClick={() => deleteRecipe(index)}> Delete </button>
                </div>
           )
       }) 
    ) : (
        <p className='center'> You have no recipes left </p>
    )
    return (
        <div className='RecipeList'>
            <h1>Recipe List</h1>
            <div className='RecipeListItems'>
                {recipeList}
            </div>
            <br/>
            <button className='AddRecipeButton'><Link className='AddRecipeButtonLink' to={"/addRecipe"}>{"Add Recipe"}</Link></button>
        </div>
    )
}

export default RecipeList
