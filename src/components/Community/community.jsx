import React from 'react';
import './Community.css'

const community = ({logo, name}) => {
  return (
  <div className='community'>
    <p>{logo}</p>
    <p>{name}</p>
  </div>
  );
};

export default community;
