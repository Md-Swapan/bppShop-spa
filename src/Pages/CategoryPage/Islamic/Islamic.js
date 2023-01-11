import React from "react";
import { Link } from "react-router-dom";
import IslamicSubCategory from "../../../Components/IslamicSubCategory/IslamicSubCategory";
import "./Islamic.css";

const Islamic = () => {
  return (
    <>
      <div className="islamic_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Islamic
            </li>
          </ol>
        </nav>
        <div>
          <IslamicSubCategory></IslamicSubCategory>
        </div>
      </div>
    </>
  );
};

export default Islamic;
