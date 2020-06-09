import React, {useReducer, useState}  from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


const initialState = {
  name: '',
  ingredients: [''],
  steps: [''],  
}

function reducer(state, {field, value}) {
  return {
    ...state,
    [field]: value
  }
}

function User({addRecipe}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const blankIngredient = ''
  const [ingredientState, setIngredientState] = useState([{...blankIngredient}])
  
  const addIngredient = () => {
    setIngredientState([...ingredientState, {...blankIngredient}]);
  }

  const blankStep = ''
  const [stepState, setStepState] = useState([{...blankStep}])
  
  const addStep = () => {
    setStepState([...stepState, {...blankStep}]);
  }


  const onChange = (e) => {
    dispatch({field: e.target.name, value: e.target.value})
  }

  const handleIngredientChange = (e) => {
    const updatedIngredients = [...ingredientState];
    updatedIngredients[e.target.dataset.idx][e.target.className] = e.target.value;
    setIngredientState(updatedIngredients);
  }

  const handleStepChange = (e) => {
    const updatedSteps = [...stepState];
    updatedSteps[e.target.dataset.idx][e.target.className] = e.target.value;
    setStepState(updatedSteps);
  }

  const {name, ingredients, steps} = state
  
  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !ingredients || !steps) return
    addRecipe(name)
    localStorage.setItem(name, JSON.stringify({'name': name, 'ingredients': ingredientState, 'steps': stepState}))
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
              type='text'
              value={name}
              placeholder= 'Add the name here...'
              onChange={onChange}
            />

            <h2>Ingredients</h2>
            {
              ingredientState.map((val, idx) => {
                const ingredientId = `ingredient-${idx}`;
                return (
                  <div key={`ingredient-${idx}`}>
                    <label htmlFor={ingredientId}>{`Ingredient #${idx + 1}`}</label>
                    <input
                      type="text"
                      name={ingredientId}
                      data-idx={idx}
                      id={ingredientId}
                      placeholder= 'Add ingredients here...'
                      className='ingredient'
                      value={ingredientState[idx].ingredient}
                      onChange={handleIngredientChange}
                    />
                  </div>
                );      
              })
            }
            <input type="button" value="Add Ingredient" onClick={addIngredient}/>

            <h2>Steps</h2>
            {
              stepState.map((val, idx) => {
                const stepId = `step-${idx}`;
                return (
                  <div key={`step-${idx}`}>
                    <label htmlFor={stepId}>{`Step #${idx + 1}`}</label>
                    <input
                      type="text"
                      name={stepId}
                      data-idx={idx}
                      id={stepId}
                      placeholder= 'Add step here...'
                      className='step'
                      value={stepState[idx].step}
                      onChange={handleStepChange}
                    />
                  </div>
                );      
              })
            }
            <input type="button" value="Add Step"  onClick={addStep}/>
          </form>  
          <button className='AddRecipeSaveButton' onClick={handleSubmit}><Link className='AddRecipeSaveButtonLink' to={"/"}>Add Recipe</Link></button>
        </div>
      </div>
    </div>
  )
}

export default User
