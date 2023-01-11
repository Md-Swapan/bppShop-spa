import React from "react";
import { Link } from "react-router-dom";
import WatchSubCategory from "../../../Components/WatchSubCategory/WatchSubCategory";
import "./Watch.css";

const Watch = () => {
  return (
    <>
      <div className="watch_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Watch
            </li>
          </ol>
        </nav>
        <div>
          <WatchSubCategory></WatchSubCategory>
        </div>
      </div>
    </>
  );
};

export default Watch;
