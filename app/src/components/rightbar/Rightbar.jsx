import React from "react";
import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/resource/gift1.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>J</b> and <b> 3 other friends</b> have a birthday today!
          </span>
        </div>
        <img src="/resource/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitleProfile">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Virginia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile7.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile8.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile9.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="resource/profile/profile4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{profile ? <ProfileRightbar /> : <HomeRightbar />}
        
      </div>
    </div>
  );
}
