import React from 'react';
import './Post.css'

const post = ({title, text}) => {
  return (
  <div className='post'>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
  );
};

export default post;
