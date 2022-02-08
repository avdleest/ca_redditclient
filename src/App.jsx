import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://www.reddit.com/r/popular.json').then((res) => {
      setPosts(res.data.data.children.map((child) => child.data))
    })
  }, [])

  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <PostList posts={posts} />
        <Communities communities={posts} />
      </div>
    </div>
  )
}
