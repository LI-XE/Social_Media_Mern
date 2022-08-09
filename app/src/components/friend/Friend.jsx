import React from "react";
import { Link } from "react-router-dom";
import "./friend.css";

export default function Friend({ friend }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <Link to="/profile/user.username">
        <img
          src={PF + friend.profilePicture}
          alt={friend.username}
          className="sidebarFriendIMG"
        />
        <span className="sidebarFriendName">{friend.username}</span>
      </Link>
    </li>
  );
}
