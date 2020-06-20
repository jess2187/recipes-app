import React, {useState} from 'react'
import RecipeList from './RecipeList'
import RecipeCreator from './RecipeCreator'
import RecipeView from './RecipeView'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('mySavedRecipes')) || []) 

  // TODO: need to remove item from database
  //       Something like: `localStorage.removeItem(newRecipes[index])`
  //       (doesn't work though)
  const deleteRecipe = index => {
    const newRecipes = [...recipes]
    newRecipes.splice(index, 1)
    setRecipes(newRecipes)
    localStorage.setItem('mySavedRecipes', JSON.stringify(newRecipes))
  }

  const addRecipe = name => {
    const newRecipes = [...recipes, {name}]
    setRecipes(newRecipes)
    localStorage.setItem('mySavedRecipes', JSON.stringify(newRecipes))
  }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/new'>
            <RecipeCreator addRecipe={addRecipe} />
          </Route>
          <Route path='/recipes/:recipe' component={RecipeView}/>
          <Route path='/'>
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
