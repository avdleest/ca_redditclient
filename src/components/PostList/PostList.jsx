/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post/Post'
import { selectSearchTerm } from '../../features/posts/postsSlice'
import './PostList.css'

// TODO: add key property

export default function PostList({ posts }) {
  const searchTerm = useSelector(selectSearchTerm)

  return (
    <div className="postList">
      {searchTerm && (
      <div className="searchTerm">
        Search results for
        {' '}
        <span><em>{searchTerm}</em></span>
        :
      </div>
      )}
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
