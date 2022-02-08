import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'
import { fetchPosts, selectPosts } from './features/posts/postsSlice'

export default function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)

  useEffect(() => {
    dispatch(fetchPosts('r/popular'))
  }, [dispatch])

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
