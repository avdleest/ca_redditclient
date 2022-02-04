import React from 'react';
import Post from '../Post/post'
import './PostList.css'

const example = [
  {
    title: 'abc',
    text: 'abc',
  },
  {
    title: 'def',
    text: 'def',
  }
]

const postList = () => {
  return (
  <div className='postList'>
    {example.map(data => <Post title={data.title} text={data.text} />)}
  </div>
  );
};

export default postList;
