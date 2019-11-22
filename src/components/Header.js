import React from 'react'

import logo from '../assets/logo.svg'
import avatar from '../assets/avatar.png'
import home from '../assets/home.svg'
import notification from '../assets/notification.svg'
import message from '../assets/message.svg'

function Header(){
  return (
    <header id="main-header">
      <div className="content">
        <nav>
          <ul>
            <li><img src={home} alt="Home"/> Home</li>
            <li><img src={notification} alt="Notifications"/>Notifications</li>
            <li><img src={message} alt="Messages"/>Messages</li>
          </ul>
        </nav>
        <img src={logo} alt="Logo Twitter"/>
        <div className="side">
          <input type="text" placeholder="Search on Twitter"/>
          <img src={avatar} alt=""/>
          <button>Tweet</button>
        </div>
      </div>
    </header>
  )
}

export default Header