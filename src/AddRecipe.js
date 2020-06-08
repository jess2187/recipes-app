import React, {useReducer}  from 'react';
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
      <button className='BackButton'><Link className='BackButtonLink' to={'/'}>Back</Link></button>
      <div className='AddRecipe'>
        <h1>Add Recipe!</h1>
        <div className='AddRecipeForm'>
          <form>
            <h2>Name</h2>
            <input 
              name= 'name'
              value={name}
              placeholder= 'Add the name here...'
              onChange={onChange}
            />
            <h2>Ingredients</h2>
            <input 
              name= 'ingredients'
              value={ingredients}
              placeholder= 'Add ingredients here...'
              onChange={onChange}
            />
            <h2>Steps</h2>
            <input 
              name= 'steps'
              value={steps}
              placeholder= 'Add steps here...'
              onChange={onChange}
            />
          </form>  
          <button className='AddRecipeSaveButton' onClick={handleSubmit}><Link className='AddRecipeSaveButtonLink' to={"/"}>Add Recipe</Link></button>
        </div>
      </div>
    </div>
  )
}

export default User
