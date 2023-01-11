import React from "react";
import "./HomeApplianceDecorate.css";
import { Link } from "react-router-dom";
import HomeApplianceDecorateSubCategory from "../../../Components/HomeApplianceDecorateSubCategory/HomeApplianceDecorateSubCategory";

const HomeApplianceDecorate = () => {
  return (
    <>
      <div className="home_appliance_decorate_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Home Appliance Decorate
            </li>
          </ol>
        </nav>
        <div>
          <HomeApplianceDecorateSubCategory></HomeApplianceDecorateSubCategory>
        </div>
      </div>
    </>
  );
};

export default HomeApplianceDecorate;
