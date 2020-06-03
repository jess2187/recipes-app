import React, {useState} from 'react'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import Recipe from './Recipe'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function GetRecipes(){
 return JSON.parse(localStorage.getItem('mySavedRecipes')) || [] 
}

function App() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('mySavedRecipes')) || []) 

  const deleteRecipe = index => {
    const newRecipes = [...recipes]
    localStorage.removeItem(newRecipes.splice(index, 1))
    // newRecipes.splice(index, 1)
    setRecipes(newRecipes)
    localStorage.setItem('mySavedRecipes', JSON.stringify(newRecipes))
    
  }

  const addRecipe = name => {
    const newRecipes = [...recipes, {name}]
    setRecipes(newRecipes)
    localStorage.setItem('mySavedRecipes', JSON.stringify(newRecipes))
  }

  let items = [
    {name: "My Recipes", link:"/"},
    {name: "Add Recipe", link:"/addRecipe"},
    {name: "Recipe", link:"/recipe"},
  ]
  
  return (
    <div className='todo-app container'>
      <Router>
        <Switch>
          
          <Route path='/addRecipe'>
            {/* <button><Link to={'/'}>Back</Link></button> */}
            <AddRecipe addRecipe={addRecipe} />
          </Route>
          <Route path='/:recipe' component={Recipe}/>
          <Route path='/'>
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
            <button><Link to={"/addRecipe"}>{"Add Recipe"}</Link></button>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
