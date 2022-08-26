import "./message.css";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import axios from "axios";

function Message({ message, own }) {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      await axios.get(`/user?userId=${message.sender}`).then((res) => {
        console.log(res);
        setUser(res.data);
      });
    };
    fetchUser();
  }, [message]);

  return (
    <div className={own ? "message own" : "message"}>
      <img
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + "profile/noAvatar.png"
        }
        alt=""
        className="messageImg"
      />
      <div className="messageBottom">
        <p className="messageText">{message.text}</p>
        <span className="messageTime">{format(message.createdAt)}</span>
      </div>
    </div>
  );
}

export default Message;
