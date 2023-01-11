import React from "react";
import "./Pharmacy.css";
import { Link } from "react-router-dom";
import PharmacySubCategory from "../../../Components/PharmacySubCategory/PharmacySubCategory";

const Pharmacy = () => {
  return (
    <>
      <div className="pharmacy_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Pharmacy
            </li>
          </ol>
        </nav>
        <div>
          <PharmacySubCategory></PharmacySubCategory>
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
