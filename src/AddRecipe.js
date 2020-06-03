import React, {useState, useReducer, useRef, useEffect}  from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


const initialState = {
  name: '',
  ingredients: '',
  steps: '',  
}

function reducer(state, {field, value}) {
  return {
    ...state,
    [field]: value
  }
}

function User({addRecipe}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (e) => {
    dispatch({field: e.target.name, value: e.target.value})
  }

  const {name, ingredients, steps} = state
  
  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !ingredients || !steps) return
    addRecipe(name)
    localStorage.setItem(name, JSON.stringify({'name': name, 'ingredients': ingredients, 'steps': steps}))
  } 

  return (
    <div>
    <button><Link to={'/'}>Back</Link></button>
    <form>
      <input 
        name= 'name'
        value={name}
        placeholder= 'Name of recipe'
        onChange={onChange}
      />
      <input 
        name= 'ingredients'
        value={ingredients}
        placeholder= 'Ingredients'
        onChange={onChange}
      />
      <input 
        name= 'steps'
        value={steps}
        placeholder= 'Steps'
        onChange={onChange}
      />
      <button type="submit" value="Submit" onClick={handleSubmit}><Link to={"/"}>Save</Link></button>
    </form>  
    </div>
  )
}

export default User
