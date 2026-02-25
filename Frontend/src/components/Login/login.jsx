import React, { useState } from "react";
import "./login.css";

import user_icon from "../Assets/Username.png";
import email_icon from "../Assets/Email.png";
import password_icon from "../Assets/password.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // ✅ Action state: login/signup
  const [action, setAction] = useState("login");

  // ✅ Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // ✅ Signup Function
  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        username: name,
        email: email,
        password: password,
      });

      alert("Signup Successful 🎉 Now Login");
      setAction("login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup Failed ❌");
    }
  };

  // ✅ Login Function
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      });

      // Save JWT token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="Container">
      {/* Card with action class */}
      <div className={`card ${action}`}>
        {/* Header */}
        <div className="Header">
          <div className="text">
            {action === "login" ? "Login" : "Sign Up"}
          </div>
          <div className="underline"></div>
        </div>

        {/* Inputs */}
        <div className="inputs">
          {/* Name Field ONLY in Signup */}
          {action === "signup" && (
            <div className="input name-field">
              <img src={user_icon} alt="user" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {/* Email */}
          <div className="input">
            <img src={email_icon} alt="email" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Toggle Buttons (SignUp Left | Login Right) */}
        <div className="submit-container">
          <button
            className={action === "signup" ? "submit active" : "submit gray"}
            onClick={() => setAction("signup")}
          >
            Sign Up
          </button>

          <button
            className={action === "login" ? "submit active" : "submit gray"}
            onClick={() => setAction("login")}
          >
            Login
          </button>
        </div>

        {/* Main Submit Button */}
        <button
          className="main-submit"
          onClick={action === "login" ? handleLogin : handleSignup}
        >
          {action === "login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Login;
