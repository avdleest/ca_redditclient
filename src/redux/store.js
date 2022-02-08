import { configureStore } from '@reduxjs/toolkit'
import communitiesReducer from '../features/communities/communitiesSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

const store = configureStore({
  reducer: {
    communities: communitiesReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
})

export default store
