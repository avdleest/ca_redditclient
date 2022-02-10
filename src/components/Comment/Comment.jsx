/* eslint-disable react/prop-types */
import React from 'react'
import './Comment.css'

export default function Comment({ author, body }) {
  return (
    <div className="comment">
      <h5>{author}</h5>
      <p>{body}</p>
    </div>
  )
}
