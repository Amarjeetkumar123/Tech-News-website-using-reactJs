import React from 'react'
import { useGlobalContext } from './Contextapi'

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>Welcome to the Tech News Website</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text" placeholder='e.g. html,css,node,react etc.'
          
            value={query}
            onChange={(e)=>searchPost(e.target.value)}
          />
          
        </div>
      </form>
    </>
  )
}

export default Search