/* eslint-disable react/prop-types */
import React from 'react'
import Community from '../Community/Community'
import './Communities.css'

export default function Communities({ communities }) {
  return (
    <div className="communities-container">
      <div className="communities">
        <div className="title">
          <h1>Related Communities</h1>
        </div>
        <div className="community-container">
          {communities.map((data) => <Community subreddit={data.subreddit} />)}
        </div>
      </div>
    </div>
  )
}
