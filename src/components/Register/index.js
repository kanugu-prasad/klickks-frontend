import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './index.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("https://klickks-backend-1-iigm.onrender.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });
    const data = await res.json();
    if (data.message) {
      alert("Registration successful!");
      history.push("/login");
    } else {
      alert(data.error);
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


