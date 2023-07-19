import React from 'react'
import './title.css'


function Title(props) {
  return (
    <div className='title text-center mt-5'>
      <h2 className='ptitle'>{props.text}</h2>
      <div className="loading">
  <svg width="250px" height="48px">
      <polyline points="0.157 24, 40 24, 44 48, 53 0, 63 24, 104 24, 114 48, 130 0, 140 48, 150 24, 210 24" id="back"></polyline>
    <polyline points="0.157 24, 40 24, 44 48, 53 0, 63 24, 104 24, 114 48, 130 0, 140 48, 150 24, 210 24" id="front"></polyline>
  </svg>
</div>
    </div>
  )
}

export default Title
