/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React from 'react'
import Comment from '../Comment/Comment'
import './Comments.css'

export default function Comments({ commentsdata, showComments, onClose, isLoadingC }) {
  if (!showComments) return null
  if (isLoadingC) return <span>Loading...</span>
  return (
    <div className="comments">
      <button type="button" onClick={onClose}>Close Comments</button>
      {commentsdata.map((data, idx) => idx !== commentsdata.length - 1
      && <Comment author={data.author} body={data.body} />)}
    </div>
  )
}
