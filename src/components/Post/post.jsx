import React from 'react'
import './Post.css'

export default function Post({ title, text }) { // eslint-disable-line react/prop-types
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
