import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = action.payload
    },
  },
})

export const selectPosts = (state) => state.posts
export const { addPost } = postsSlice.actions
export default postsSlice.reducer
