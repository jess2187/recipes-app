import React, {useState, useEffect} from 'react'
import {fetchRecipes} from './api'
import {Link} from 'react-router-dom'

const RecipeBook = (recipes) => {
  const [data, setData] = useState([])

  const username = 'jessica'

  useEffect(() => {
    async function fetchData(){
      const response = await fetchRecipes(username)
      console.log(response)
      setData(response)
    }
    fetchData()
    
  }, [username])

  const listItems = data.map((recipe, index) => (
      <div className='Recipe' key={recipe.id}>
        <button className='RecipeButton'>
          <Link className='RecipeButtonLink' to={`/recipes/${recipe.id}/${recipe.name}`}>{recipe.name}</Link>
        </button>
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
    <div className='RecipeBook'>
      <h1>Recipe Book</h1>
      <div className='RecipeBookItems'>
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

export default RecipeBook
