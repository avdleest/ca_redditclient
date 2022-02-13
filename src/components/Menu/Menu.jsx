/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import Community from '../Community/Community'
import { selectCommunities } from '../../features/communities/communitiesSlice'
import './Menu.css'

export default function Menu() {
  const communities = useSelector(selectCommunities)
  return (
    <div className="menus-container">
      <div className="menu">
        <div className="menu-title">
          <h1>Related Communities</h1>
        </div>
        <div className="menu-container">
          {communities.map((data) => (
            <Community key={data} subreddit={data} />
          ))}
        </div>
      </div>
    </div>
  )
}