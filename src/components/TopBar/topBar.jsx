import React from 'react';
import SearchBar from '../SearchBar/searchBar';
import './TopBar.css'

const topBar = () => {
  return (
  <div className='topBar'>
    <div className='logo-container'>
      <h1>logo</h1>
    </div>
    <div className="search">
      <SearchBar />
    </div>
  </div>
  )
};

export default topBar;
