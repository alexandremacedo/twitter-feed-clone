import React from 'react'

import profilePhoto from '../assets/avatar.jpg'
import place from '../assets/place.svg'
import url from '../assets/url.svg'
import joined from '../assets/joined.svg'
import born from '../assets/born.svg'
import followers from '../assets/followers.svg'
import images from '../assets/images.svg'
import comments from '../assets/comments.svg'
import retweet from '../assets/retweet.svg'
import like from '../assets/like.svg'


import acer from '../assets/acer.jpg'
import nubank from '../assets/nubank.jpg'
import digio from '../assets/digio.png'
import itau from '../assets/itau.png'
import itausocial from '../assets/itau_social.jpg'
import cocacola from '../assets/coca_cola.jpg'
import olx from '../assets/olx.png'
import rocketseat from '../assets/rocketseat.jpg'
import zoom from '../assets/zoom.jpg'
import b2w from '../assets/b2w.png'


import flatprog from '../assets/flatprog.png'
import habbo from '../assets/habbo.png'
import background from '../assets/background.png'



function Content(){
  return (
    <div className="wrapper-content content">
      <Profile />
      <Timeline />
      <Widgets />
    </div>
  )
}



function Profile(){
  return (
    <aside className="profile">
      <img className="avatar" src={profilePhoto} alt="Profile photo"/>
      <h1>Alexandre Macedo</h1>
      <span>@alexandre</span>
      <p>Web, Design & Javascript</p>
      <ul className="list">
        <li><img src={place} alt="Place"/>São Paulo, Brasil</li>
        <li><img src={url} alt="URL"/>exitbit.be</li>
        <li><img src={joined} alt="Joined"/>Joined June 2007</li>
        <li><img src={born} alt="Born"/>Born the 01st of July 1997</li>
      </ul>
      <CommonFollowers />
      <PhotosAndVideos />
    </aside>

  )
}

function CommonFollowers(){
  return (
    <div className="widget followers">
      <strong><img src={followers} alt="Followers"/> 73 followers that you know</strong>
      <ul>
        <li><img src={acer} alt="Acer"/></li>
        <li><img src={nubank} alt="Nubank"/></li>
        <li><img src={digio} alt="Digio"/></li>
        <li><img src={itau} alt="Itau"/></li>
        <li><img src={itausocial} alt="Itau social"/></li>
        <li><img src={cocacola} alt="Coca cola"/></li>
        <li><img src={olx} alt="Olx"/></li>
        <li><img src={rocketseat} alt="Rocketseat"/></li>
        <li><img src={zoom} alt="Zoom"/></li>
        <li><img src={b2w} alt="B2W"/></li>
      </ul>
    </div>
  )
}

function PhotosAndVideos(){
  return (
    <div className="widget images">
      <strong><img src={images} alt="Images"/> 266 Photos and videos</strong>
      <ul>
        <li><img src={itau} alt="Itau"/></li>
        <li><img src={flatprog} alt="Flatprog"/></li>
        <li><img src={habbo} alt="Habbo"/></li>
        <li><img src={profilePhoto} alt="Profile photo"/></li>
        <li><img src={itausocial} alt="Itau social"/></li>
        <li><img src={background} alt="Background"/></li>
      </ul>
    </div>
  )
}



function Timeline(){
  return (
    <section className="timeline">
      <nav>
        <a href="" className="active">Tweets</a>
        <a href="">Tweets and replies</a>
        <a href="">Medias</a>
      </nav>

      <ul className="tweets">
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            
            <img src={background} className="post" alt="Tweet image"/>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
        <li>
          <img src={profilePhoto} alt="Profile photo"/>
          <div class="info">
            <strong>Alexandre Macedo <span>@alexandre</span></strong>
            <p>Conteudo do tweet</p>
            <div className="actions">
              <a href=""><img src={comments} alt="Comment"/> 3</a>
              <a href=""><img src={retweet} alt="Retweet"/> 4</a>
              <a href=""><img src={like} alt="Like"/> 14</a>
            </div>
          </div>
        </li>
      </ul>

    </section>
  )
}



function Widgets(){
  return (
    <>
    <aside className="widgets">
      <WhoToFollow/>
      <Trends />
    </aside>
    
    </>
  )
}

function WhoToFollow(){
  return (
    <div className="widget follow">
      <div className="title">
        <strong>Who to follow</strong>
        <a href="#">Refresh</a>
        <a href="#">View all</a>
      </div>
      <ul>
        <li>
          <div className="profile">
            <img src={acer} alt="Acer"/>
            <div className="info">
              <strong>Acer <span>@acer</span></strong>
              <button>Follow</button>
            </div>
          </div>
          <a href="">x</a>
        </li>
        <li>
          <div className="profile">
            <img src={nubank} alt="Nubank"/>
            <div className="info">
              <strong>Nubank <span>@nubank</span></strong>
              <button>Follow</button>
            </div>
          </div>
          <a href="">x</a>
        </li>
        <li>
          <div className="profile">
            <img src={digio} alt="Digio"/>
            <div className="info">
              <strong>Digio <span>@digio</span></strong>
              <button>Follow</button>
            </div>
          </div>
          <a href="">x</a>
        </li>
      </ul>
    </div>
  )
}

function Trends(){
  return (
    <div className="widget trends">
      <div className="title">
        <strong>Trends</strong>
        <a href="#">Change</a>
      </div>
      <ul>
        <li>#Coding</li>
        <li>#Coffee</li>
        <li>#Javascript</li>
        <li>#Node.js</li>
        <li>#ReactJS</li>
        <li>#ReactNative</li>
      </ul>
    </div>
  )
}

export default Content