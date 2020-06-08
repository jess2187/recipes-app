import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css'

function ViewRecipe ({match}){
  let params = match.params
  let data = JSON.parse(localStorage.getItem(params.recipe))
  return (
    <div>
      <button className='BackButton'><Link className='BackButtonLink' to={'/'}>Back</Link></button>
      <div className='ViewRecipe'>
        <h1>{data.name}</h1>
        <div className='RecipeContents'>
          <h2>Ingredients</h2>
          <p>{data.ingredients}</p>
          <h2>Steps</h2>
          <p>{data.steps}</p>
        </div>
      </div>
    </div>
  )
}

export default ViewRecipe
