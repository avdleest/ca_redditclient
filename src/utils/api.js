import axios from 'axios'
/* eslint-disable import/prefer-default-export */
export const fetchPostsAPI = async (community) => {
  const response = await axios.get(`https://www.reddit.com/${community}.json`)
  return response
}
