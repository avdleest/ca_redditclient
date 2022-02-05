import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'

export default function App() {
  const [posts, setPosts] = useState([])

  const temp = []

  useEffect(() => {
    axios.get('https://www.reddit.com/r/popular.json').then((res) => {
      res.data.data.children.map((child) => temp.push(child.data))
      setPosts(temp)
    })
  }, [])

  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <PostList posts={posts} />
        <Communities />
      </div>
    </div>
  )
}
