/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable block-spacing */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Post.css'

export default function Post({ title, text, pic, user, date, num_comments, comments }) { // eslint-disable-line react/prop-types
  const timeNow = new Date(Date.now()).getHours()

  const [showComments, setShowComments] = useState(false)

  const [commentsArray, setCommentsArray] = useState([])
  const comments_url = comments.slice(0, comments.length - 1)

  const json = '.json'

  const endpoint = comments_url + json

  const temp = []

  useEffect(() => {
    if (showComments) {
      axios.get(endpoint).then((res) => {
        res.data[1].data.children.map((child) => {temp.push(child.data)})
        setCommentsArray(temp)
        console.log(commentsArray)
      })
    }
  }, [showComments])

  return (
    <div className="post">
      <h3>{title}</h3>
      {(pic && pic.slice(pic.length - 3, pic.length) === 'jpg' ? <div className="img-container"><p><img src={pic} alt="" /></p></div> : null)}
      <p>{text}</p>
      <div className="post-footer">
        <p>Added by: {user}</p>
        <p>{timeNow - date.getHours()} hours ago</p>
        <div className="comment-btn-container">
          <button type="button" onClick={() => { setShowComments(!showComments) }}>
            <img src="assets/comment.png" alt="" />
          </button>
          <p>{num_comments}</p>
        </div>
      </div>
    </div>
  )
}
