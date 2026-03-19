import React from "react";
import "../styles/navbar.css";

const Profile = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            {user ? user.charAt(0).toUpperCase() : "U"}
          </div>
          <div>
            <h2>My Profile</h2>
            <p>Manage your account details</p>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-box">
            <span>Name</span>
            <h3>{user ? user.split("@")[0] : "Guest User"}</h3>
          </div>

          <div className="info-box">
            <span>Email</span>
            <h3>{user || "No email found"}</h3>
          </div>

          <div className="info-box">
            <span>Status</span>
            <h3>{localStorage.getItem("userstatus") ? "Logged In" : "Logged Out"}</h3>
          </div>
        </div>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("userstatus");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;