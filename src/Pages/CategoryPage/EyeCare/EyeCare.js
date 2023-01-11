import React from "react";
import "./EyeCare.css";
import { Link } from "react-router-dom";
import EyeCareSubCategory from "../../../Components/EyeCareSubCategory/EyeCareSubCategory";

const EyeCare = () => {
  return (
    <>
      <div className="eye_care_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Eye Care
            </li>
          </ol>
        </nav>
        <div>
          <EyeCareSubCategory></EyeCareSubCategory>
        </div>
      </div>
    </>
  );
};

export default EyeCare;
