import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'
import Comments from './components/Comments/Comments'
import {
  fetchPosts,
  selectPosts,
  selectCommunity,
  selectShowMenu,
  isLoadingPosts,
  hasErrorPosts,
  setShowMenu,
} from './features/posts/postsSlice'
import { selectShowComments } from './features/comments/commentsSlice'
import Loading from './components/Loading/Loading'
import Menu from './components/Menu/Menu'

export default function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const community = useSelector(selectCommunity)
  const isLoading = useSelector(isLoadingPosts)
  const showComments = useSelector(selectShowComments)
  const hasError = useSelector(hasErrorPosts)
  const showMenu = useSelector(selectShowMenu)

  useEffect(() => {
    dispatch(fetchPosts(community))
  }, [])

  if (hasError) {
    return <span>Error 404</span>
  }

  return (
    <div className="App">
      <TopBar />
      <Menu />
      {showComments ? (
        <Comments />
      ) : (
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <PostList posts={posts} />
              <Communities />
            </>
          )}
        </div>
      )}
    </div>
  )
}
