// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/StatusReport.css";
import image from "../assets/react.svg";
const StatusReport = () => {
  return (
    <div className="status-report-container">
      <div className="status-content">
        <div className="status-block">
          <h3>Status</h3>
          <p>You supported 0 Charity organizations this month</p>
          <p>5 Charity organizations have released their reports</p>
        </div>
        <div className="status-block">
          <h3>Sustainable Development Goals</h3>
          <p>2 mobile money partners have released their CSR report</p>
        </div>
      </div>
      <img src={image} alt="Status Report Image" className="status-image" />
    </div>
  );
};

export default StatusReport;
