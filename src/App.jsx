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
import {
  selectShowComments, selectComments, setShowComments, isLoadingComments,
} from './features/comments/commentsSlice'

export default function App() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const community = useSelector(selectCommunity)
  const isLoading = useSelector(isLoadingPosts)
  const showComments = useSelector(selectShowComments)
  const hasError = useSelector(hasErrorPosts) // eslint-disable-line 
  const commentsArray = useSelector(selectComments)
  const isLoadingC = useSelector(isLoadingComments)

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
      {showComments
        ? (
          <Comments
            commentsdata={commentsArray}
            showComments={showComments}
            isLoadingC={isLoadingC}
            onClose={() => dispatch(setShowComments(false))}
          />
        )
        : (
          <div className="container">
            {isLoading ? <span>Loading...</span> : <PostList posts={posts} />}
            <Communities />
          </div>
        )}
    </div>
  )
}
