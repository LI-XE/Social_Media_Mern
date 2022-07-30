import React, { useState } from 'react';
import "./post.css";
import {MoreVert} from "@material-ui/icons";
import { Users } from "../../data";


export default function Post({post}) {
  const [ like, setLike ] = useState(post.like);
  const [ isLiked, setIsLiked ] = useState(false);
  console.log(like);
  const likeHandler = () => {
    console.log("happy");
    setLike( isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="top">
          <div className="topLeft">
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg' />
            <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="center">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className='postImg'/>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img src="/resource/thumbs_up.png" onClick={likeHandler} alt="like" className="likeIcon" />
            <img src="/resource/heart.png"  onClick={likeHandler} alt="heart" className="likeIcon" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
