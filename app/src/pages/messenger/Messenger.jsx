import "./messenger.css";

import React from "react";
import Conversations from "../../components/conversations/Conversations";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

function Messenger() {
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
            </div>

            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something ..."
              ></textarea>
              <button className="chatSubmitBtn">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
