import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './SearchBar.css'
import { fetchSearchResults } from '../../features/posts/postsSlice'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSearchResults(searchTerm))
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
        aria-label="Search posts"
      />
      <div className="search-icon" role="search">
        <button type="submit" onClick={handleSubmit}>
          <img src="assets/search.png" alt="" />
        </button>
      </div>
    </form>

  )
}
