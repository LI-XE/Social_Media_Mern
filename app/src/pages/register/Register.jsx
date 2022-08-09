import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const registerHandle = async (e) => {
    e.preventDefault();
    if (passwordConfirm.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <form className="registerBox" onSubmit={registerHandle}>
            <input
              type="text"
              ref={username}
              required
              placeholder="Username"
              className="registerInput"
            />
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
            />
            <input
              type="password"
              ref={password}
              required
              placeholder="Password"
              minLength={6}
              className="registerInput"
            />
            <input
              type="password"
              ref={passwordConfirm}
              required
              placeholder="Password Confirm"
              className="registerInput"
            />
            <button className="registerBtn">Sign up</button>
            <button className="registerRegisterBtn">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
