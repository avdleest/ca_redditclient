/* eslint-disable react/prop-types */
import React from 'react'
import './Community.css'

export default function Community({ subreddit }) { // eslint-disable-line react/prop-types
  return (
    <div className="community">
      <div className="logo-container">
        <h5>logo</h5>
      </div>
      <div className="name-container">
        {subreddit}
      </div>
    </div>
  )
}
