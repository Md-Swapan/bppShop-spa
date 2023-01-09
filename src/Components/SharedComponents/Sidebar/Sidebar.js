import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-toggle-section">
        <input type="checkbox" name="" id="openSidebarMenu" />
        <label for="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner top"></div>
          <div className="spinner middle"></div>
          <div className="spinner bottom"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="menu">
            <li>
              <a href="">
                <i className="bi bi-house-door-fill"></i> Home
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/islamicicon.png"
                  alt=""
                />
                Islamic Products
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/groceryicon.png"
                  alt=""
                />
                Grocery
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/fasionicon.png"
                  alt=""
                />
                Fashion
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/electronicicon.png"
                  alt=""
                />
                Electronics
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/babycareicon.png"
                  alt=""
                />
                Baby Care
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/cosmaticicon.png"
                  alt=""
                />
                Cosmetics
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/furntureicon.png"
                  alt=""
                />
                Furniture
              </a>
            </li>
            <li>
              <a href="">
                <img
                  width="15"
                  className="sidebar-Icon"
                  src="img/shoesicon.png"
                  alt=""
                />
                Shoes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
