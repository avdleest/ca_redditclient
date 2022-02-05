import { createSlice } from '@reduxjs/toolkit'

const communitiesSlice = createSlice({
  name: 'communities',
  initialState: {

  },
  reducers: {
    addCommunity: (state, action) => {
      state[action.payload.id] = action.payload
    },
  },
})

export const selectCommunities = (state) => state.communities
export const { addCommunity } = communitiesSlice.actions
export default communitiesSlice.reducer
