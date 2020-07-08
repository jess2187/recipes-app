import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {fetchRecipe} from './api'
import './App.css'

/**
 * Renders contents of recipe in list for recipe view
 * 
 * elements: array of objects
 * elementKey: property to render from elements
 */
const ContentList = ({elements}) => (
  <div>
    {
      elements.map((element) => (
        <li key={element.toString()}>{element}</li>
      ))
    }
  </div>
)

/**
 * The recipe view with recipe name, ingredients and steps
 * 
 * match: injected by react router, url tells us which recipe to render
 */
function RecipeView ({match}) {
  let recipe = 'test'
  let id = match.params.id
  console.log(id)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    async function fetchData(){
      const response = await fetchRecipe(id)
      setData(response)
    }
    fetchData()
    
  }, [id])

  console.log(data)
  return (
    <div>
      <button className='Button'><Link className='ButtonLink' to={'/'}>Back</Link></button>
      <div className='ViewRecipe'>
        <h1>{data ? data.name : 'loading'}</h1>
        <div className='RecipeContents'>
          <h2>Ingredients</h2>
          <ul>
            <ContentList elements={data ? data.ingredients : []} elementKey={'ingredient'} />
          </ul>
          <h2>Steps</h2>
          <ol>
            <ContentList elements={data ? data.steps : []} elementKey={'step'} />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeView
