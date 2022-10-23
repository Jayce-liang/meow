import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function Header() {
  return (
    <div className="Header">
      {/* logo */}
      <div className="logo-container">
        <img className="logo" src="logo.png" alt="logo" />
      </div>
      {/* search */}
      <div className="search-container">
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            name="keyword"
            autoComplete="off"
            placeholder="🌈 想看啥"
            required
          />
          <button type="submit" className="btn-search">
            <SearchIcon sx={{ color: "red", fontSize: 25 }} />
          </button>
        </form>
      </div>
      {/* history */}
      <div className="history">
        <AccessTimeOutlinedIcon
          sx={{ color: "grey", fontSize: 20 }}
        ></AccessTimeOutlinedIcon>
        <span>观看记录</span>
      </div>
    </div>
  );
}
