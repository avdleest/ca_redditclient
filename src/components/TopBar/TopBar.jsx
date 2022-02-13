/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import { selectShowMenu, setShowMenu } from '../../features/posts/postsSlice'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './TopBar.css'

export default function TopBar() {
  const showMenu = useSelector(selectShowMenu)
  const dispatch = useDispatch()

  return (
    <div className="topBar">
      <div className="logo-container">
        <img src="assets/reddit.png" alt="" />
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div className="showmenu-btn">
        {!showMenu ? (
          <RiMenu3Line
            color="gray"
            style={{
              maxHeight: '27px',
              maxWidth: '27px',
              minHeight: '20px',
              minWidth: '20px',
              marginRight: '15px',
            }}
            onClick={() => dispatch(setShowMenu(true))}
          />
        ) : (
          <RiCloseLine
            color="gray"
            style={{
              maxHeight: '27px',
              maxWidth: '27px',
              minHeight: '20px',
              minWidth: '20px',
              marginRight: '15px',
            }}
            onClick={() => dispatch(setShowMenu(false))}
          />
        )}
      </div>
    </div>
  )
}
