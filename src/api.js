import axios from 'axios'

const fetchRecipes = async (username) => {
  const response = await axios.get(`/api/u/${username}/recipes`)
  console.log(response.data)
  return response.data
}

const fetchRecipe = async (id) => {
  const response = await axios.get(`/api/r/${id}`)
  console.log(response.data)
  return response.data
}

const createRecipe = ({name, author, tags, steps, ingredients}) => {
  axios.post('/api/new', {
    name, author, tags, steps, ingredients
  })
}

export {
  fetchRecipes,
  fetchRecipe,
  createRecipe
}
