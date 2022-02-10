import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCommentsAPI } from '../../utils/api'

export const fetchComments = createAsyncThunk(
  'posts/fetchComments',
  async (endpoint) => {
    const response = await fetchCommentsAPI(endpoint)
    return response.data[1].data.children
  },
)

const initialState = {
  comments: [],
  showComments: false,
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
    setShowComments: (state, action) => {
      state.showComments = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload.map((comment) => comment.data)
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
export const selectShowComments = (state) => state.comments.showComments
export const { setComments, setShowComments } = commentsSlice.actions
export default commentsSlice.reducer
