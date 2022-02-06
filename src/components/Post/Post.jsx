/* eslint-disable react/prop-types */
import React from 'react'
import './Post.css'

export default function Post({ title, text, pic }) { // eslint-disable-line react/prop-types
  console.log(typeof pic)

  return (
    <div className="post">
      <h3>{title}</h3>
      {(pic && pic.slice(pic.length - 3, pic.length) === 'jpg' ? <div className="img-container"><p><img src={pic} alt="" /></p></div> : null)}
      <p>{text}</p>
    </div>
  )
}
