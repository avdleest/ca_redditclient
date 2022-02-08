import axios from 'axios'

export const fetchPostsAPI = async (community) => {
  const response = await axios.get(`https://www.reddit.com/${community}.json`)
  return response
}

export const fetchCommunitiesAPI = async () => {
  console.log('fetchCommunities called')
  return undefined
}
