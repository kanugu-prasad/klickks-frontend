import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './index.css';
const API_URL = process.env.REACT_APP_API_URL || "https://klickks-backend-1-iigm.onrender.com/api";

// Debug: Log the API URL on component load
console.log("=== REGISTER COMPONENT LOADED ===");
console.log("process.env.REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
console.log("Final API_URL:", API_URL);

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      console.log("=== REGISTER DEBUG ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password ? "***" : "empty");
      console.log("Confirm Password:", confirmPassword ? "***" : "empty");
      console.log("API URL:", API_URL);
      console.log("Full URL:", `${API_URL}/register`);
      
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Origin": "https://klickks-frontend-sepia.vercel.app"
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      console.log("Response ok:", response.ok);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Response data:", data);
      
      if (data.message) {
        alert("Registration successful!");
        history.push("/login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("=== REGISTER ERROR ===");
      console.error("Error type:", error.constructor.name);
      console.error("Error message:", error.message);
      console.error("Full error:", error);
      
      if (error.message.includes("Unexpected token")) {
        alert("Backend server is not responding. Please check if the backend is deployed correctly.");
      } else if (error.message.includes("Failed to fetch")) {
        alert("Network error: Cannot connect to backend server. Please check your internet connection.");
      } else {
        alert("Registration failed: " + error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Create Account</h1>
      <p className="register-para">Join uo today and get started</p>
      <form onSubmit={handleRegister} className="form-style">
        <input className="input-style" placeholder="Name" id="name" onChange={(e) => setName(e.target.value)} />
        <input className="input-style" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <input className="input-style" type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input className="input-style" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="button" type="submit">Create Account</button>
        <p className="login-para">Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
      
    </div>
  );
}

export default Register;


