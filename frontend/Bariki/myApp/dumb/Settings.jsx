// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/Settings.css"; // Ensure you create this CSS file

// Import your profile image placeholder (you may use a default image or empty source)
import defaultProfilePic from "../assets/react.svg"; // Update the path accordingly

const Settings = () => {
  return (
    <>
      <div className="settings-container">
        <div className="settings-box profile-settings">
          <h2>Profile Settings</h2>
          <div className="profile-pic-container">
            <img
              src={defaultProfilePic}
              alt="Profile"
              className="profile-pic"
            />
            <input
              type="file"
              id="profile-pic-upload"
              className="profile-pic-upload"
            />
            <label htmlFor="profile-pic-upload" className="upload-button">
              Change Picture
            </label>
          </div>
          <div className="profile-details">
            <label>
              Username:
              <input
                type="text"
                placeholder="Enter new username"
                className="input-field"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                placeholder="Enter new password"
                className="input-field"
              />
            </label>
          </div>
        </div>
        <div className="settings-box account-management">
          <h2>Add or Remove Account</h2>
          <div className="account-options">
            <p>Manage your payment methods:</p>
            <select className="account-select">
              <option>Mpesa</option>
              <option>Card</option>
              <option>PayPal</option>
            </select>
          </div>
          <button className="change-settings-button">Change Settings</button>
        </div>
      </div>
    </>
  );
};

export default Settings;
