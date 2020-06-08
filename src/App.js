import React, {useState} from 'react'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import ViewRecipe from './ViewRecipe'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'

function App() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('mySavedRecipes')) || []) 

  const deleteRecipe = index => {
    const newRecipes = [...recipes]
    localStorage.removeItem(newRecipes[index])
    newRecipes.splice(index, 1)
    setRecipes(newRecipes)
    localStorage.setItem('mySavedRecipes', JSON.stringify(newRecipes))
    
  }

  const addRecipe = name => {
    const newRecipes = [...recipes, {name}]
    setRecipes(newRecipes)
    localStorage.setItem('mySavedRecipes', JSON.stringify(newRecipes))
  }

  // let items = [
  //   {name: "My Recipes", link:"/"},
  //   {name: "Add Recipe", link:"/addRecipe"},
  //   {name: "ViewRecipe", link:"/viewrecipe"},
  // ]
  
  return (
    <div className='App'>
      <Router>
        <Switch>
          
          <Route path='/addRecipe'>
            <AddRecipe addRecipe={addRecipe} />
          </Route>
          <Route path='/:recipe' component={ViewRecipe}/>
          <Route path='/'>
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
