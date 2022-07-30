import React from 'react';
import "./online.css";

export default function Online({user}) {
  return (
    <li className="friend">
            <div className="imgContainer">
              <img src={user.profilePicture} alt={user.username} className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">{user.username}</span>
          </li>
  )
}
