/* eslint-disable react/prop-types */
import React from 'react'
import Post from '../Post/Post'
import './PostList.css'

export default function PostList({ posts }) {
  return (
    <div className="postList">
      {posts.map((data) => <Post title={data.title} text={data.selftext} />)}
    </div>
  )
}
