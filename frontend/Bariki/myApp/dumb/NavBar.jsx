// eslint-disable-next-line no-unused-vars
import React from "react";
import profile from "../assets/react.svg";
import "../components/Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src={profile}
            alt="Profile Picture"
            className="profile-picture"
          ></img>
          <span className="welcome-text">Welcome, User!</span>
        </div>
        <div className="navbar-right">
          <button className="nav-button">Settings</button>
          <button className="nav-button">Edit</button>
          <button className="nav-button">Logout</button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
