import React from 'react'
import Post from '../Post/Post'
import './PostList.css'

const example = [
  {
    title: 'abc',
    text: 'abc',
  },
  {
    title: 'def',
    text: 'def',
  },
]

export default function PostList() {
  return (
    <div className="postList">
      {example.map((data) => <Post title={data.title} text={data.text} />)}
    </div>
  )
}
