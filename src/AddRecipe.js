import React, {useState}  from 'react';

function AddRecipe({addRecipe}) {
  const [value, setValue] = useState({name: '', indredients: '', steps: ''})


  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addRecipe(value)
    setValue({name: '', indredients: '', steps: ''})
  } 

  return (
    <form >
      Name:
      <input 
        type='text' 
        className='input' 
        value={value}
        name='name'
        placeHolder='Add recipe name here'
        onChange={e => setValue({[e.target.name]: e.target.value})}
      />
      <br/>
      Ingredients:
      <input 
        type='text' 
        className='input' 
        value={value}
        name='ingredients'
        placeHolder='Add ingredients here'
        onChange={e => setValue({[e.target.name]: e.target.value})}
      />
      <br/>
      Steps:
      <input 
        type='text' 
        className='input' 
        value={value}
        name='steps'
        placeHolder='Add steps here'
        onChange={e => setValue({[e.target.name]: e.target.value})}
      />
      <input type="submit" value="Submit" onClick={handleSubmit}/>
    </form>
  )
}
export default AddRecipe
