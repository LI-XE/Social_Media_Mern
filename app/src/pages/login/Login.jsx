import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="left">
          <h3 className="loginLogo">SNS</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SNS
          </span>
        </div>
        <div className="right">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="text" placeholder="Password" className="loginInput" />
            <button className="loginBtn">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterBtn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
