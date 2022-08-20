import React, { useState, useEffect } from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const username = params.username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      await axios.get(`/user?username=${username}`).then((res) => {
        console.log(res);
        setUser(res.data);
      });
    };
    fetchUser();
  }, [username]);

  return (
    <div>
      {/* <Topbar /> */}
      <div className="profile">
        <Sidebar friend={user.following} />
        <div className="Right">
          <div className="RightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || PF + "noImage2.jpeg"}
                alt=""
                className="coverImg"
              />
              <img
                src={user.profilePicture || PF + "profile/noAvatar.png"}
                alt=""
                className="userImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="InfoName">{user.username}</h4>
              <span className="InfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="RightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
