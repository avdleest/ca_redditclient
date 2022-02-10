import React, { useState } from "react"
import { useDispatch } from "react-redux"
import "./SearchBar.css"
import {
  fetchSearchResults,
  setSearchTerm,
} from "../../features/posts/postsSlice"

export default function SearchBar() {
  const dispatch = useDispatch()
  const [searchTermLocal, setSearchTermLocal] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchTermLocal) return
    dispatch(setSearchTerm(searchTermLocal))
    dispatch(fetchSearchResults(searchTermLocal))
    setSearchTermLocal("")
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTermLocal}
        onChange={(e) => {
          setSearchTermLocal(e.target.value)
        }}
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
