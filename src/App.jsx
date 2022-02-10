import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import PostList from './components/PostList/PostList'
import Communities from './components/Communities/Communities'
import Comments from './components/Comments/Comments'
import {
  fetchPosts, selectPosts, selectCommunity, isLoadingPosts, hasErrorPosts,
} from './features/posts/postsSlice'
import { setCommunities } from './features/communities/communitiesSlice'
import { selectShowComments } from './features/comments/commentsSlice'
import Loading from './components/Loading/Loading'

export default function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const community = useSelector(selectCommunity)
  const isLoading = useSelector(isLoadingPosts)
  const showComments = useSelector(selectShowComments)
  const hasError = useSelector(hasErrorPosts) // eslint-disable-line 

  useEffect(() => {
    dispatch(fetchPosts(community))
  }, [])

  useEffect(() => {
    const communities = posts.map((post) => post.subreddit)
    dispatch(setCommunities(communities))
  }, [posts])

  // TODO: implement isLoading as spinner in posts and hasError as a span with error message
  if (hasError) {
    return <span>Error 404</span>
  }

  return (
    <div className="App">
      <TopBar />
      {showComments
        ? (
          <Comments />
        )
        : (
          <div className="container">
            {isLoading ? <Loading />
              : (
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
