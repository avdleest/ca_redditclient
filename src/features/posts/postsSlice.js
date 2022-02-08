import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPostsAPI } from '../../utils/api'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    // TODO: actually fetch the posts below
    const response = await fetchPostsAPI()
    const responseJSON = await response.json()
    return responseJSON
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
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.isLoading = true
      state.error = false
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.push(action.payload)
      state.isLoading = false
      state.error = false
    },
    [fetchPosts.rejected]: (state) => {
      state.isLoading = false
      state.error = true
    },
  },

})

export const selectPosts = (state) => state.posts
export const selectSearchTerm = (state) => state.posts.searchTerm
export const {
  setPosts,
  setSearchTerm,
  setSelectedCommunity,
} = postsSlice.actions
export default postsSlice.reducer
