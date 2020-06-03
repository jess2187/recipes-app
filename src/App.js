import React, {useState} from 'react'
import Recipes from './Recipes'
import AddRecipe from './AddRecipe'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function GetRecipes(){
 return JSON.parse(localStorage.getItem('mySavedRecipes')) || [] 
}

function App() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('mySavedRecipes')) || []) 

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

  let items = [
    {name: "My Recipes", link:"/"},
    {name: "Add Recipe", link:"/recipe"}
  ]

  let tags = items.map((item, i) => {
    return (
      <li key={i}>
        <Link to={item.link}>{item.name}</Link>
      </li>
    )
  })
  
  return (
    <div className='todo-app container'>
      <Router>
        <Switch>
          <Route path="/recipe">
            <button><Link to={"/"}>Back</Link></button>
            <AddRecipe addRecipe={addRecipe} />
          </Route>
          <Route path="/">
            <Recipes recipes={recipes} deleteRecipe={deleteRecipe}/>
            <button><Link to={"/recipe"}>{"Add Recipe"}</Link></button>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
