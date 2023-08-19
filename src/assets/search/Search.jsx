import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='search_container'>
    <input className='text_input' type="text" />
    <label htmlFor="text_input"> Search </label>
    </div>

  )
}

export default Search