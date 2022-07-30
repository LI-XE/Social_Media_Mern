import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="left">
          <h3 className="registerLogo">SNS</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on SNS
          </span>
        </div>
        <div className="right">
          <div className="registerBox">
            <input
              type="text"
              placeholder="Usernaem"
              className="registerInput"
            />
            <input type="text" placeholder="Email" className="registerInput" />
            <input
              type="text"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="text"
              placeholder="Password Confirm"
              className="registerInput"
            />
            <button className="registerBtn">Sign up</button>
            <button className="registerRegisterBtn">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
