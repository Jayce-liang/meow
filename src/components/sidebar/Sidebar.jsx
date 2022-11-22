import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
export default function SideBar() {
  return (
    <div className="Sidebar">
      <ul>
        <NavLink to={"/"}>首页</NavLink>
        <NavLink to={"/films"}>电影</NavLink>
      </ul>
    </div>
  );
}
