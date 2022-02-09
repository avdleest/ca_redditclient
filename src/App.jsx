import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'
import {
  fetchPosts, selectPosts, selectCommunity, isLoadingPosts, hasErrorPosts,
} from './features/posts/postsSlice'
import { setCommunities } from './features/communities/communitiesSlice'

export default function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const community = useSelector(selectCommunity)
  const isLoading = useSelector(isLoadingPosts)
  const hasError = useSelector(hasErrorPosts) // eslint-disable-line 

  useEffect(() => {
    dispatch(fetchPosts(community))
  }, [])

  useEffect(() => {
    const communities = posts.map((post) => post.subreddit)
    dispatch(setCommunities(communities))
  }, [posts])

  // TODO: implement isLoading as spinner in posts and hasError as a span with error message

  return (
    <div className="App">
      <TopBar />
      <div className="container">
        {isLoading ? <span>Loading...</span> : <PostList posts={posts} />}
        <Communities communities={posts} />
      </div>
    </div>
  )
}
