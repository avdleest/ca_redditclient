import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
  const [key, setKey] = useState('')

  function search(k) {
    console.log(k)
  }

  return (
    <div className="searchBar">
      <input type="text" placeholder="Search" onChange={(e) => { setKey(e.target.value) }} />
      <div className="search-icon" role="search">
        <button type="submit" onClick={() => search(key)}>
          <img src="assets/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}
