import React from 'react';
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/resource/gift1.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>J</b> and <b> 3 other friends</b> have a birthday today!</span>
        </div>
        <img src="/resource/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
          <li className="friend">
            <div className="imgContainer">
              <img src="/resource/profile/profile3.jpg" alt="" className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">John</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
