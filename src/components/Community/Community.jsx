/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts, selectPosts } from '../../features/posts/postsSlice'
import './Community.css'

export default function Community({ subreddit }) {
  const dispatch = useDispatch()
  const [icon, setIcon] = useState('')
  const str = '/r/'
  const endpoint = str + subreddit

  useEffect(() => {
    const controller = new AbortController()

    const getIcon = async (subreddit) => {
      try {
        const icon = await axios.get(
          `https://www.reddit.com/r/${subreddit}/about.json`,
          {
            signal: controller.signal,
          }
        )
        const iconURL = icon.data.data.icon_img
        setIcon(iconURL)
      } catch (err) {
        throw new Error(err)
      }
    }

    getIcon(subreddit)

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className="community">
      <button type="button" onClick={() => dispatch(fetchPosts(endpoint))}>
        <div className="logo-container">
          {icon ? <img src={icon} alt="" /> : null}
        </div>
        <div className="name-container">{subreddit}</div>
      </button>
    </div>
  )
}
