import React, {useParams} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function Recipe ({match}){
  // 
  // let data = props.match.params.handle
  let params = match.params
  let data = JSON.parse(localStorage.getItem(params.recipe))
  return (
    <div>
      <button><Link to={'/'}>Back</Link></button>
      <h1>{data.name}</h1>
      <h2>Ingredients</h2>
      <p>{data.ingredients}</p>
      <h2>Steps</h2>
      <p>{data.steps}</p>
    </div>
  )
}

export default Recipe
