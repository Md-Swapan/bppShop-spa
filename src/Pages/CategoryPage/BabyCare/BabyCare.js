import React from "react";
import { Link } from "react-router-dom";
import BabyCareSubCategory from "../../../Components/BabyCareSubCategory/BabyCareSubCategory";
import "./BabyCare.css";

const BabyCare = () => {
  return (
    <>
      <div className="baby_care_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Baby Care
            </li>
          </ol>
        </nav>
        <div>
          <BabyCareSubCategory></BabyCareSubCategory>
        </div>
      </div>
    </>
  );
};

export default BabyCare;
