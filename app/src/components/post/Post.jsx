import React from 'react';
import "./post.css";
import {MoreVert} from "@material-ui/icons";


export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="top">
          <div className="topLeft">
            <img src="/resource/profile/profile1.jpg" alt="" className='postProfileImg' />
            <span className="postUsername">Xiangen Li</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="center">
          <span className="postText">Hey! It's my first post :)</span>
          <img src="/resource/post/post1.jpg" alt="" className='postImg'/>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img src="/resource/thumbs_up.png" alt="" className="likeIcon" />
            <img src="/resource/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">22 people like it</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
