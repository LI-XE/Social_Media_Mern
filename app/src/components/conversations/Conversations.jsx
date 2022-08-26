import "./conversations.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Conversations({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(currentUser);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    // console.log(friendId);
    const getUser = async () => {
      try {
        const res = await axios.get("user?userId=" + friendId);
        console.log(res);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, currentUser]);
  return (
    <div className="conversations">
      <img
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "profile/noAvatar.png"
        }
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}

export default Conversations;
