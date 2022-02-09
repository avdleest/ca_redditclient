/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable block-spacing */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCommentsEndpoint } from '../../utils/api'
import './Post.css'
import { fetchComments, setShowComments } from '../../features/comments/commentsSlice'

export default function Post({ title, text, pic, user, date, num_comments, comments }) { // eslint-disable-line react/prop-types
  const timeNow = new Date(Date.now()).getHours()
  const dispatch = useDispatch()
  const commentsEndpoint = getCommentsEndpoint(comments)

  return (
    <div className="post">
      <h3>{title}</h3>
      {(pic && pic.slice(pic.length - 3, pic.length) === 'jpg'
        ? (
          <div className="img-container">
            <p><img src={pic} alt="" /></p>
          </div>
        ) : (
          <div className="link-container">
            {pic ? <a href={pic}>click to view content</a> : null}
          </div>
        ))}
      <p>{text}</p>
      <div className="post-footer">
        <p>Added by: {user}</p>
        <p>{timeNow - date.getHours()} hours ago</p>
        <div className="comment-btn-container">
          <button
            type="button"
            onClick={() => {
              dispatch(fetchComments(commentsEndpoint))
              dispatch(setShowComments(true))
            }}
          >
            <img src="assets/comment.png" alt="" />
          </button>
          <p>{num_comments}</p>
        </div>
      </div>
    </div>
  )
}
