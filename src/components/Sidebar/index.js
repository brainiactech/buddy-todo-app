import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import { SidebarWrapper } from "./sidebar.styles";

const Sidebar = props => {
  const { path } = props;

  const sideBar = [
  
    { title: "Dashboard", route: "/home", iconType: "exception" }
  ].map(({ route, iconType, title, admin }, i) => {
    return (
        <Link to={route} key={i}>
          <div
            className={
              path === route || route.includes(path)
                ? "nav-pills active"
                : "nav-pills"
            }
          >
            <Icon type={iconType} theme="outlined" />
            <span>{title}</span>
          </div>
        </Link>
      
    );
  });

  return (
    <SidebarWrapper>
      <div className="sidebar">
        <div className="title">
          <Link to="/" style={{ color: "#fff" }}>
            <span>
              <Icon type="robot" theme="outlined" /> Todo App
            </span>
          </Link>
        </div>

        <div className="content">
          <div className="nav-pills-list">{sideBar}</div>
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
