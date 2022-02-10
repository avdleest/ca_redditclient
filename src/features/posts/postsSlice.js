import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPostsAPI, fetchSearchResultsAPI } from '../../utils/api'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (community) => {
    const response = await fetchPostsAPI(community)
    return response.data.data.children
  },
)

export const fetchSearchResults = createAsyncThunk(
  'posts/fetchSearchResults',
  async (searchTerm) => {
    const response = await fetchSearchResultsAPI(searchTerm)
    return response.data.data.children
  },
)

const initialState = {
  posts: [],
  error: false,
  isLoading: true,
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
        state.searchTerm = ''
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.searchTerm = ''
        state.posts = action.payload.map((post) => post.data)
        state.isLoading = false
        state.error = false
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.searchTerm = ''
        state.isLoading = false
        state.error = true
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.posts = action.payload.map((post) => post.data)
        state.isLoading = false
        state.error = false
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
  },

})

export const selectPosts = (state) => state.posts.posts
export const selectCommunity = (state) => state.posts.selectedCommunity
export const selectSearchTerm = (state) => state.posts.searchTerm
export const isLoadingPosts = (state) => state.posts.isLoading
export const hasErrorPosts = (state) => state.posts.error
export const {
  setPosts,
  setSearchTerm,
  setSelectedCommunity,
} = postsSlice.actions
export default postsSlice.reducer
