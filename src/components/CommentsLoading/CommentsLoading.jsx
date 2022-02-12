import React from 'react'
import CommentLoading from '../CommentLoading/CommentLoading'
import './CommentsLoading.css'

export default function CommentsLoading() {
  function numberRange (start, end) {
    return new Array(end - start).fill().map((d, i) => i + start)
  }
  return (
    <div className="commentsloading">
        {numberRange(0, 40).map(i => <CommentLoading key={i} />)}
    </div>
  )
}
