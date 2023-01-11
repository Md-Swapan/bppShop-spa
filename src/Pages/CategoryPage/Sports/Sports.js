import React from "react";
import { Link } from "react-router-dom";
import SportsSubCategory from "../../../Components/SportsSubCategory/SportsSubCategory";
import "./Sports.css";

const Sports = () => {
  return (
    <>
      <div className="sports_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Sports
            </li>
          </ol>
        </nav>
        <div>
          <SportsSubCategory></SportsSubCategory>
        </div>
      </div>
    </>
  );
};

export default Sports;
