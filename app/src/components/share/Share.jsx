import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import React from "react";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="top">
          <img src="/resource/profile/profile1.jpg" alt="" className="shareProfileImg" />
          <input className="shareInput" placeholder="What's in your mind? " />
        </div>
        <hr className="shareHr" />
        <div className="bottom">
          <div className="options">
            <div className="option">
              <PermMedia
              htmlColor="tomato" className="shareIcon" />
              <span className="optionText">Photo or Video</span>
            </div>
            <div className="option">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="optionText">Tag</span>
            </div>
            <div className="option">
              <Room htmlColor="green" className="shareIcon" />
              <span className="optionText">Location</span>
            </div>
            <div className="option">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="optionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
