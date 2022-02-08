import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPostsAPI } from '../../utils/api'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (community) => {
    const response = await fetchPostsAPI(community)
    return response.data.data.children
  },
)

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedCommunity: 'r/popular',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    setSelectedCommunity(state, action) {
      state.selectedCommunity = action.payload
      state.searchTerm = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        action.payload.map((post) => state.posts.push(post.data))
        // state.posts.map(action.payload.data)
        state.isLoading = false
        state.error = false
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
  },

})

export const selectPosts = (state) => state.posts.posts
export const selectSearchTerm = (state) => state.posts.searchTerm
export const {
  setPosts,
  setSearchTerm,
  setSelectedCommunity,
} = postsSlice.actions
export default postsSlice.reducer
