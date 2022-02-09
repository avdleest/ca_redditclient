import axios from 'axios'

export const fetchPostsAPI = async (community) => {
  const response = await axios.get(`https://www.reddit.com/${community}.json`)
  return response
}

export const fetchCommunitiesAPI = async () => {
  console.log('fetchCommunities called')
  return undefined
}

export const fetchCommentsAPI = async (endpoint) => { // eslint-disable-line no-unused-vars
  const response = await axios.get(endpoint)
  return response
}

export const getCommentsEndpoint = (comments) => {
  const commentsURL = comments.slice(0, comments.length - 1)
  return `https://www.reddit.com/${commentsURL}.json`
}
