import "./chatOnline.css";
import React from "react";

function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6PXZJ1aARRNQzPGSl05mcyD-259xRyejUw&usqp=CAU"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Willy</span>
      </div>
    </div>
  );
}

export default ChatOnline;
