import React, { useState, useEffect } from "react";
import axios from "axios";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      await axios.get(`/user?userId=${post.userId}`).then((res) => {
        console.log(res);
        setUser(res.data);
      });
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    console.log("happy");
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="top">
          <div className="topLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture || PF + "profile/noAvatar.png"}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            {/* <span className="postDate">{format(post.createdAt)}</span> */}
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="center">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img
              src={`${PF}thumbs_up.png`}
              onClick={likeHandler}
              alt="like"
              className="likeIcon"
            />
            <img
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt="heart"
              className="likeIcon"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
