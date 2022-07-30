import React from 'react';
import "./friend.css";

export default function Friend({friend}) {
  return (
    <li className="sidebarFriend">
            <img src={friend.profilePicture} alt={friend.username} className="sidebarFriendIMG" />
            <span className="sidebarFriendName">{friend.username}</span>
          </li>
  )
}
