import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCommunitiesAPI } from '../../utils/api'

// TODO: Determine whether it's required to fetch communities separately

export const fetchCommunities = createAsyncThunk(
  'posts/fetchCommunities',
  async () => {
    const response = await fetchCommunitiesAPI()
    return response.data.data.children
  },
)

const initialState = {
  communities: [],
  error: false,
  isLoading: false,
}

// TODO: Determine whether fetching communities is actually required in a later stage

const communitiesSlice = createSlice({
  name: 'communities',
  initialState,
  reducers: {
    setCommunities: (state, action) => {
      state.communities = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunities.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchCommunities.fulfilled, (state, action) => {
        action.payload.map((community) => state.communities.push(community.data))
        state.isLoading = false
        state.error = false
      })
      .addCase(fetchCommunities.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const selectCommunities = (state) => state.communities.communities
export const isLoadingCommunities = (state) => state.communities.isLoading
export const hasErrorCommunities = (state) => state.communities.error
export const { setCommunities } = communitiesSlice.actions
export default communitiesSlice.reducer
