import React from 'react'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <PostList />
        <Communities />
      </div>
    </div>
  )
}
