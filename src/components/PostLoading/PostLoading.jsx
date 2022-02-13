import React from 'react'
import ContentLoader from 'react-content-loader'
import './PostLoading.css'

export default function PostLoading() {
  const HeadBodyGrid = () => (
    <ContentLoader height="300" width="100%" backgroundColor={'white'}>
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="300"/>
    </ContentLoader>
  )
  return (
    <div className="postloading">
        <HeadBodyGrid />
    </div>
    )
}
