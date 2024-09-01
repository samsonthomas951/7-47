// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <button className="search-button">Search</button>
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-assistant">Search Assistant</button>
    </div>
  );
};

export default SearchBar;
