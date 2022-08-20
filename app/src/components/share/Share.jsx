import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/post/post", newPost);
      console.log(newPost);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "profile/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            className="shareInput"
            type="text"
            ref={desc}
            placeholder={"What's in your mind " + user.username + " ?"}
          />
        </div>
        <hr className="shareHr" />
        <form className="bottom" onSubmit={(e) => submitHandler(e)}>
          <div className="options">
            <label htmlFor="file" className="option">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="optionText">Photo or Video</span>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
