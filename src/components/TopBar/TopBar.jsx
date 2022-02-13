/* eslint-disable react/prop-types */
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './TopBar.css'

export default function TopBar({showMenu, setShowMenu}) {
  return (
    <div className="topBar">
      <div className="logo-container">
        <img src="assets/reddit.png" alt="" />
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div className='showmenu-btn'>
        {!showMenu ? <RiMenu3Line color="gray" style={{ 'max-height': '27px' , 'max-width': '27px', 'min-height': '20px' , 'min-width': '20px'}} onClick={() => setShowMenu(true)} /> : <RiCloseLine color="gray" style={{ 'max-height': '27px' , 'max-width': '27px', 'min-height': '20px' , 'min-width': '20px'}} onClick={() => setShowMenu(false)} />}
      </div>
    </div>
  )
}
