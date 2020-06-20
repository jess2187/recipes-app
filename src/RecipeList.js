import React from 'react'
import {Link} from 'react-router-dom'

const RecipeList = ({recipes, deleteRecipe}) => {
  const listItems = recipes.map((recipe, index) => (
      <div className='Recipe' key={recipe.name}>
        <button className='RecipeButton'>
          <Link className='RecipeButtonLink' to={`/recipes/${recipe.name}`}>{recipe.name}</Link>
        </button>
        <button className='DeleteButton'onClick={() => deleteRecipe(index)}> Delete </button>
      </div>
    )
  )
 
  const noRecipeMsg = (
    <div>
      <p>You don't have any recipes.</p>
      <p>Add recipes below!</p>
    </div>
  )

  return (
    <div className='RecipeList'>
      <h1>Recipe List</h1>
      <div className='RecipeListItems'>
        {listItems.length > 0 
          ? listItems
          : noRecipeMsg
        }
      </div>
      <br/>
      <button className='Button'>
        <Link className='ButtonLink' to='/new'>Add Recipe</Link>
      </button>
    </div>
  )
}

export default RecipeList
