import { configureStore } from '@reduxjs/toolkit'
import communitiesReducer from '../features/communities/communitiesSlice'
import postsReducer from '../features/posts/postsSlice'

const store = configureStore({
  reducer: {
    communities: communitiesReducer,
    posts: postsReducer,
  },
})

export default store
