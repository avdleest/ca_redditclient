/* eslint-disable react/prop-types */
import React from "react"
import { useSelector } from "react-redux"
import Community from "../Community/Community"
import { selectCommunities } from "../../features/communities/communitiesSlice"
import "./Communities.css"

// TODO: add key property

export default function Communities() {
  const communities = useSelector(selectCommunities)
  return (
    <div className="communities-container">
      <div className="communities">
        <div className="title">
          <h1>Related Communities</h1>
        </div>
        <div className="community-container">
          {communities.map((data) => (
            <Community key={data} subreddit={data} />
          ))}
        </div>
      </div>
    </div>
  )
}
