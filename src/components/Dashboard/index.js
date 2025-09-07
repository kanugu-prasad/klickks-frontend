import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './index.css';
const API_URL = process.env.REACT_APP_API_URL;
function Dashboard() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`${API_URL}/dashboard`, {
      method: "GET",
      credentials: "include", 
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch(() => history.push("/login"));
  }, [history]);

  const handleLogout = async () => {
    await fetch("https://klickks-backend-1-iigm.onrender.com/api/logout", {
      method: "POST",
      credentials: "include",
    });
    history.push("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header-container">
        <div>
          <h1 className="dashboard-heading">Dashboard</h1>
          <p className="dashboard-para">Welcome back, {user?.name}!</p>
        </div>
        <button  className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="user-info-container">
        <h2 className="user-info-heading">User Information</h2>
        <ul className="separator">
          <li className="user-info-item"><strong>Name  :</strong> {user?.name}</li>
          <li className="user-info-item"><strong>Email  :</strong> {user?.email}</li>
        </ul>
      </div>
      
      {!user &&
        <p>Loading...</p>
      }
    </div>
  );
}

export default Dashboard;

