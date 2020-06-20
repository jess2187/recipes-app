import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

/**
 * Renders contents of recipe in list for recipe view
 * 
 * elements: array of objects
 * elementKey: property to render from elements
 */
const ContentList = ({elements, elementKey}) => (
  <div>
    {
      elements.map((element) => (
        <li key={element[elementKey].toString()}>{element[elementKey]}</li>
      ))
    }
  </div>
)

/**
 * The recipe view with recipe name, ingredients and steps
 * 
 * match: injected by react router, url tells us which recipe to render
 */
function RecipeView ({match}) {
  let recipe = JSON.parse(localStorage.getItem(match.params.recipe))

  return (
    <div>
      <button className='Button'><Link className='ButtonLink' to={'/'}>Back</Link></button>
      <div className='ViewRecipe'>
        <h1>{recipe.name}</h1>
        <div className='RecipeContents'>
          <h2>Ingredients</h2>
          <ul>
            <ContentList elements={recipe.ingredients} elementKey={'ingredient'} />
          </ul>
          <h2>Steps</h2>
          <ol>
            <ContentList elements={recipe.steps} elementKey={'step'} />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeView
