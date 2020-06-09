import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css'


// {"name":"a","ingredients":[{"ingredient":"s"},{"ingredient":"d"},{"ingredient":"f"},{"ingredient":"v"}],"steps":"s"}
// [{"ingredient":"s"},{"ingredient":"d"},{"ingredient":"f"},{"ingredient":"v"}]
function ListContents ({elements, elementKey}) {
  let list = elements.map(element => {
    console.log(element[elementKey])
    return (
      <li>{element[elementKey]}</li>
    )
  })
  
  return list
}

function ViewRecipe ({match}){
  let params = match.params
  let data = JSON.parse(localStorage.getItem(params.recipe))

  return (
    <div>
      <button className='Button'><Link className='ButtonLink' to={'/'}>Back</Link></button>
      <div className='ViewRecipe'>
        <h1>{data.name}</h1>
        <div className='RecipeContents'>
          <h2>Ingredients</h2>
          <ul>
            <ListContents elements={data.ingredients} elementKey={'ingredient'} />
          </ul>
          <h2>Steps</h2>
          <ol>
            <ListContents elements={data.steps} elementKey={'step'} />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ViewRecipe
