import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCommentsAPI } from '../../utils/api'

export const fetchComments = createAsyncThunk(
  'posts/fetchComments',
  async () => {
    const response = await fetchCommentsAPI()
    return response.data.data.children
  },
)

const initialState = {
  comments: [],
  error: false,
  isLoading: false,
}

const commentsSlice = createSlice({
  name: 'Comments',
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        action.payload.map((comment) => state.comments.push(comment.data))
        state.isLoading = false
        state.error = false
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const selectComments = (state) => state.comments.comments
export const isLoadingComments = (state) => state.comments.isLoading
export const hasErrorComments = (state) => state.comments.error
export const { setComments } = commentsSlice.actions
export default commentsSlice.reducer
