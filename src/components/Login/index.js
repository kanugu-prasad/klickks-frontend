import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import './index.css'; 
const API_URL = process.env.REACT_APP_API_URL || "https://klickks-backend-1-iigm.onrender.com/api";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Attempting to login with:", { email, password });
      console.log("API URL:", API_URL);
      
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({ email, password }),
      });
      
      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Response data:", data);
      
      if (data.message) {
        console.log("Login successful, navigating to dashboard");
        history.push("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.message.includes("Unexpected token")) {
        alert("Backend server is not responding. Please check if the backend is deployed correctly.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Welcome Back</h1>
      <p className="login-para">Sign in to your account to continue</p>
      <form className="form-style" onSubmit={handleLogin}>
        <label className="label-style" htmlFor="email"> Email</label>
        <input className="input-style" placeholder="Enter your email" type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <label className="label-style" htmlFor="password"> Password</label>
        <input className="input-style" placeholder="Enter your password" type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="button" type="submit">Login</button>
        <p className="register-para">Don't have an account? <Link className="link-style" to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;
