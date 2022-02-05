import { configureStore } from '@reduxjs/toolkit'
import communitiesReducer from '../features/communities/communitiesSlice'

const store = configureStore({
  reducer: {
    communities: communitiesReducer,
  },
})

export default store
