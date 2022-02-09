/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React from 'react'
import Post from '../Post/Post'
import './PostList.css'

// TODO: add key property

export default function PostList({ posts }) {
  return (
    <div className="postList">
      {posts.map((data) => (
        <Post
          title={data.title}
          text={data.selftext}
          pic={data.url_overridden_by_dest}
          user={data.author}
          date={new Date(data.created)}
          num_comments={data.num_comments}
          comments={data.permalink}
        />
      ))}
    </div>
  )
}
