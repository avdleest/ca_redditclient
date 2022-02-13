/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  hasErrorComments,
  isLoadingComments,
  selectComments,
  selectShowComments,
  setShowComments,
} from '../../features/comments/commentsSlice'
import Comment from '../Comment/Comment'
import CommentsLoading from '../CommentsLoading/CommentsLoading'
import './Comments.css'

export default function Comments() {
  const dispatch = useDispatch()
  const showComments = useSelector(selectShowComments)
  const isLoadingC = useSelector(isLoadingComments)
  const hasErrorC = useSelector(hasErrorComments)
  const commentsdata = useSelector(selectComments)
  if (hasErrorC) return <span>Error 404</span>
  if (!showComments) return null
  if (isLoadingC) return <CommentsLoading />
  return (
    <div className="comments">
      <button type="button" onClick={() => dispatch(setShowComments(false))}>
        Close Comments
      </button>
      {commentsdata.map(
        (data, idx) =>
          idx !== commentsdata.length - 1 && (
            <Comment key={data.id} author={data.author} body={data.body} />
          )
      )}
    </div>
  )
}
