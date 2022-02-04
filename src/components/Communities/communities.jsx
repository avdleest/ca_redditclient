import React from 'react';
import Community from '../Community/community'
import './Communities.css'

const example = [
  {
    logo: 'logo1',
    name: 'name1'
  },
  {
    logo: 'logo2',
    name: 'name2'
  }
]

const communities = () => {
  return (
  <div className='communities-container'>
  <div className='communities'>
    <div className="title">
      <h1>Related Communities</h1>
    </div>
    <div className="community-container">
      {example.map(data => <Community logo={data.logo} name={data.name} />)}
    </div>
  </div>
  </div>
  );
};

export default communities;
