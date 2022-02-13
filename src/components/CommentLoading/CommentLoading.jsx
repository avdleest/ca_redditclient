import React from 'react'
import ContentLoader from 'react-content-loader'
import './CommentLoading.css'

export default function CommentLoading() {
  const HeadBodyGrid = () => (
    <ContentLoader height="100%" width="100%" backgroundColor={'white'}>
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%"/>
    </ContentLoader>
  )
  return (
    <div className="commentloading">
      <HeadBodyGrid />
    </div>
  )
}
