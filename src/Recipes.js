import React from 'react';

const Recipes = ({recipes, deleteRecipe}) => {
 
    // checks if there are any todos (if empty)
    const recipeList = recipes.length ? (
        recipes.map((recipe, index) => {
           return (
                <div className= 'collection-item' key={index}>
                    <span>{recipe.name}</span>
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

export default Recipes
