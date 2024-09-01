// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/DonationDetails.css"; // Ensure you create this CSS file
import downloadIcon from "../assets/react.svg"; // Update the path accordingly

const DonationsDetails = () => {
  // Sample data, replace with your actual data
  const donations = [
    {
      partner: "Mpesa",
      amount: "1000 KSH",
      charity: "Charity A",
      donateElse: "No",
    },
    {
      partner: "Card",
      amount: "50 USD",
      charity: "Charity B",
      donateElse: "Yes",
    },
    // Add more data as needed
  ];

  // Sample last month's donation data
  const lastMonthDonation = {
    date: "June 2024",
    amount: "1200 KSH",
  };

  const handleDownload = () => {
    // Logic for downloading the donation details
    console.log("Download clicked!");
  };

  return (
    <div className="donations-details-container">
      <table className="donations-table">
        <thead>
          <tr>
            <th>Payment Partner</th>
            <th>Amount</th>
            <th>Default Charity</th>
            <th>Donate Elsewhere</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.partner}</td>
              <td>{donation.amount}</td>
              <td>{donation.charity}</td>
              <td>{donation.donateElse}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="last-month-section">
        <h2>Last Months Donation</h2>
        <p>Date: {lastMonthDonation.date}</p>
        <p>Amount: {lastMonthDonation.amount}</p>
      </div>

      <button className="download-button" onClick={handleDownload}>
        <img src={downloadIcon} alt="Download" className="download-icon" />
        Download Details
      </button>
    </div>
  );
};

export default DonationsDetails;
