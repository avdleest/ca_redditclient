import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  1: {
    id: 1,
    name: 'Cool Community',
    src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  },
}

const communitiesSlice = createSlice({
  name: 'communities',
  initialState,
  reducers: {
    addCommunity: (state, action) => {
      state[action.payload.id] = action.payload
    },
  },
})

export const selectCommunities = (state) => state.communities
export const { addCommunity } = communitiesSlice.actions
export default communitiesSlice.reducer
