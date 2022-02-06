import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  1: {
    id: 1,
    name: 'Cool Post',
    src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  },
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state[action.payload.id] = action.payload
    },
  },
})

export const selectPosts = (state) => state.posts
export const { addPost } = postsSlice.actions
export default postsSlice.reducer
