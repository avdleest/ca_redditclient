import React from 'react'
import './Post.css'

export default function Post({ title, text }) { // eslint-disable-line react/prop-types
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
