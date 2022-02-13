import React from 'react'
import CommunitiesLoading from '../CommunitiesLoading/CommunitiesLoading'
import PostLoading from '../PostLoading/PostLoading'
import './Loading.css'

export default function Loading() {
  function numberRange (start, end) {
    return new Array(end - start).fill().map((d, i) => i + start)
  }
  return (
    <div className="loading">
      <div className="post-loader">
        {numberRange(0,10).map(i => <PostLoading key={i} />)}
      </div>
      <div className="community-loader">
        <CommunitiesLoading />
      </div>
    </div>
  )
}
