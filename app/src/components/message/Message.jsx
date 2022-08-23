import "./message.css";
import React from "react";

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6PXZJ1aARRNQzPGSl05mcyD-259xRyejUw&usqp=CAU"
          alt=""
          className="messageImg"
        />
      <div className="messageBottom">
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          facere eos esias aliquid nulla maxime?
        </p>
        <span className="messageTime">1 hour ago</span>
      </div>
    </div>
  );
}

export default Message;
