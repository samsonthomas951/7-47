// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section-container">
      <button className="show-all-button">Show All</button>
      <div className="organizations-list">
        <h3>All Organizations</h3>
        {/* Replace the below list with actual organization data */}
        <ul>
          <li>Organization 1</li>
          <li>Organization 2</li>
          <li>Organization 3</li>
          {/* Add more organizations here */}
        </ul>
      </div>
      <div className="info-content">
        <button className="love-button">❤️</button>
        <h3>Make us a favorite</h3>
        <p>Bariki</p>
        <p>We believe everyone has the power to make a difference</p>
        <p>
          We partner with mobile money companies to help you donate to your
          favorite charities
        </p>
        <button className="custom-donation-button">Send a donation</button>
        <p>Other favorites</p>
        <button className="custom-donation-button">Custom donation</button>
        <button className="next-button">→</button>
      </div>
    </div>
  );
};

export default InfoSection;
