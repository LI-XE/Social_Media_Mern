import "./message.css";
import React from "react";
import { format } from "timeago.js";

function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6PXZJ1aARRNQzPGSl05mcyD-259xRyejUw&usqp=CAU"
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
