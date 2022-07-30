import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <div>
      {/* <Topbar /> */}
      <div className="profile">
        <Sidebar />
        <div className="Right">
          <div className="RightTop">
            <div className="profileCover">
              <img src="resource/post/post4.jpg" alt="" className="coverImg" />
              <img
                src="resource/profile/profile1.jpg"
                alt=""
                className="userImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="InfoName">Xiangen Li</h4>
              <span className="InfoDesc">Hello, My friends!</span>
            </div>
          </div>
          <div className="RightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
