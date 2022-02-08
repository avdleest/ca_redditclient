/* eslint-disable react/prop-types */
import React from 'react'
import Comment from '../Comment/Comment'
import './Comments.css'

export default function Comments({ commentsdata }) {
  return (
    <div className="comments">
      {commentsdata.map((data, idx) => idx !== commentsdata.length - 1
      && <Comment author={data.author} body={data.body} />)}
    </div>
  )
}
