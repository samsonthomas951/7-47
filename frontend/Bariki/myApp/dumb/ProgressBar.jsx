// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Bar.css";

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-container">
      <label className="progress-label">Monthly progress</label>
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <span className="progress-text">Ksh 0</span>
          <div className="progress" style={progressStyle}></div>
        </div>
        <button className="set-goal-button">Set Goal</button>
      </div>
    </div>
  );
};

export default ProgressBar;
