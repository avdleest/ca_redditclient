import React from 'react'
import './Community.css'

export default function Community({ logo, name }) { // eslint-disable-line react/prop-types
  return (
    <div className="community">
      <p>{logo}</p>
      <p>{name}</p>
    </div>
  )
}
