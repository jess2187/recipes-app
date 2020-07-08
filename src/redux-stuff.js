import {createStore} from 'redux'

// ACTION = { type: 'CREATE_RECIPE', recipie: { ... } }

const reducer = (state={}, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return {
        ...state,
        recipes: [
          action.recipe,
          ...state.recipes,
        ]
      }

    default:
      return state
  }
}

const preloadedState = {
  recipes: localStorage.getItem('mySavedRecipes') || []
}

export const store = createStore(reducer, preloadedState)
