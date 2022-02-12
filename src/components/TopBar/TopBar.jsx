import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="logo-container">
        <img src="assets/reddit.png" alt="" />
      </div>
      <div className="search">
        <SearchBar />
      </div>
    </div>
  )
}
