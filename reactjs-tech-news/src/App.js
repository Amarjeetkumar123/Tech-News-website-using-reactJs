import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
// import { useContext } from 'react'
// import { AppContext } from './Contextapi'
// import { useGlobalContext } from './Contextapi'

const App = () => {


  return (
    <>
      <Search />
      <Pagination />
      <Stories/>
    </>
  )
}

export default App