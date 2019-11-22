import React from 'react'
import more from '../assets/more.svg'
function Bar(){
  return (
    <>
    <div className="bar">
      <div className="content">
        <ul>
          <li className="active">
            <span>Tweets</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Followings</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Lists</span>
            <strong>1234</strong>
          </li>
          <li>
            <span>Moments</span>
            <strong>1234</strong>
          </li>
        </ul>
        <Actions />
      </div>
    </div>
    </>
  )
}

function Actions(){
  return (
    <div className="actions">
      <button>Follow</button>
      <img src={more} alt="More"/>
    </div>
  )
}

export default Bar