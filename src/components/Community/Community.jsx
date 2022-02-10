/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice'
import './Community.css'

export default function Community({ subreddit }) { // eslint-disable-line react/prop-types
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [icon, setIcon] = useState('')
  const str = '/r/'
  const endpoint = str + subreddit
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subreddit}/about.json`).then((res) => setIcon(res.data.data.icon_img))
  }, [])
  return (
    <div className="community">
      <button type="button" onClick={() => dispatch(fetchPosts(endpoint))}>
        <div className="logo-container">
          {icon ? <img src={icon} alt="" /> : null}
        </div>
        <div className="name-container">
          {subreddit}
        </div>
      </button>
    </div>
  )
}
