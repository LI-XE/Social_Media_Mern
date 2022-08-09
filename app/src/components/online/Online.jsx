import React from 'react';
import "./online.css";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="friend">
            <div className="imgContainer">
              <img src={PF + user.profilePicture} alt={user.username} className="profileImg" />
              <span className="online"></span>
            </div>
            <span className="username">{user.username}</span>
          </li>
  )
}
